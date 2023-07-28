import {createContext, useState} from "react";
import {Outlet} from "react-router-dom";

import styles from './MoviesPage.module.css'
import {GenreBadge, MoviesList} from "../../components";

const Context = createContext(null);

const MoviesPage = () => {
    const [movieId, setMovieId] = useState(null);
    const [selectedGenreId, setSelectedGenreId] = useState(null);

    return (
        <div className={styles.MoviesPage}>
            <GenreBadge onSelectGenre={setSelectedGenreId}/>
            <Context.Provider value={{setMovieId}}>
                <MoviesList selectedGenreId={selectedGenreId}/>
            </Context.Provider>
            <Outlet context={{movieId}}/>
        </div>
    );
};

export {
    MoviesPage,
    Context
};
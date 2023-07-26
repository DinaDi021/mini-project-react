import {MoviesList} from "../../components/MoviesList/MoviesList";
import {createContext, useState} from "react";
import {Outlet} from "react-router-dom";

const Context = createContext(null);

const MoviesPage = () => {
    const [movieId, setMovieId] = useState(null);

    return (
        <div>
            <h1 style={{margin: '10px 25px'}}>See now:</h1>
            <Context.Provider value={{setMovieId}}>
                <MoviesList/>
            </Context.Provider>
            <Outlet context={{movieId}}/>
        </div>
    );
};

export {
    MoviesPage,
    Context
};
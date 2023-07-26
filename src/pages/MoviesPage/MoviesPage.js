import {createContext, useState} from "react";
import {Outlet} from "react-router-dom";

import {MoviesList} from "../../components";

const Context = createContext(null);

const MoviesPage = () => {
    const [movieId, setMovieId] = useState(null);

    return (
        <div>
            <h2 style={{margin: '10px 20px'}}>See now:</h2>
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
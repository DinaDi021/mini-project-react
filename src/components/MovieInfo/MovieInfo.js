import React, {useEffect} from "react";

import {MovieInfoDetails} from "./MovieInfoDetails/MovieInfoDetails";
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";


const MovieInfo = () => {
    const dispatch = useDispatch();
    const {selectedMovie} = useSelector(state => state.movies);

    useEffect(() => {
        if (selectedMovie) {
            dispatch(moviesActions.getMovieById({id: selectedMovie.id}));
        }
    }, [dispatch, selectedMovie]);

    return (
        <div>
            {selectedMovie && <MovieInfoDetails selectedMovie={selectedMovie}/>}
        </div>
    );
};

export {MovieInfo};
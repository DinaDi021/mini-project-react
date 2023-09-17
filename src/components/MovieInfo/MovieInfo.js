import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {MovieInfoDetails} from "./MovieInfoDetails/MovieInfoDetails";
import {moviesActions} from "../../redux";
import {IsLoading} from "../IsLoading/IsLoading";


const MovieInfo = () => {
    const dispatch = useDispatch();
    const {isLoading} = useSelector(state => state.progress)
    const {selectedMovie} = useSelector(state => state.movies);

    useEffect(() => {
        if (selectedMovie) {
            dispatch(moviesActions.getMovieById({id: selectedMovie.id}));
        }
    }, [dispatch, selectedMovie]);

    return (
        <div>
            {isLoading ? (
                <IsLoading />
            ) : (
                <div>
                    {selectedMovie && <MovieInfoDetails selectedMovie={selectedMovie} />}
                </div>
            )}
        </div>
    );
};

export {MovieInfo};
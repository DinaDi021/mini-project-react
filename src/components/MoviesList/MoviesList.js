import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import styles from './MoviesListCard/MoviesListCard.module.css'

import {MoviesListCard} from "./MoviesListCard/MoviesListCard";
import {moviesActions} from "../../redux";
import {IsLoading} from "../IsLoading/IsLoading";


const MoviesList = () => {
    const dispatch = useDispatch();
    const {isLoading} = useSelector(state => state.progress)
    const {movies, selectedSortBy} = useSelector(state => state.movies);
    const {selectedGenreId} = useSelector(state => state.genres);
    const [query, setQuery] = useSearchParams({page: '1', genreId: '', sorted: ''})
    const page = +query.get('page') || 1;

    useEffect(() => {

        const queryParams = { page };

        if (selectedGenreId) {
            queryParams.genreId = selectedGenreId;
        }
        if (selectedSortBy) {
            queryParams.sorted = selectedSortBy;
        }
        setQuery(queryParams);
        dispatch(moviesActions.getMovies(queryParams));
    }, [dispatch, page, selectedGenreId, selectedSortBy]);

    return (
        <div>
            {isLoading ? (
                <IsLoading />
            ) : (
                <div className={styles.wrapper}>
                    {movies.map((movie) => (
                        <MoviesListCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );
};

export {MoviesList};
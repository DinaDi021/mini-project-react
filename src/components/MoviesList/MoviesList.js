import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import styles from './MoviesListCard/MoviesListCard.module.css'

import {MoviesListCard} from "./MoviesListCard/MoviesListCard";
import {moviesActions} from "../../redux";


const MoviesList = () => {
    const dispatch = useDispatch();
    const {movies, selectedSortBy} = useSelector(state => state.movies);
    const {selectedGenreId} = useSelector(state => state.genres);
    const [query, setQuery] = useSearchParams({page: '1', genreId: '', sorted: ''})
    const page = query.get('page');
    const genreId = query.get('genreId')
    const selectedSort = query.get('sorted')

    useEffect(() => {
        dispatch(moviesActions.getMovies(
            {page,
                genreId: selectedGenreId,
                sorted: selectedSortBy}))
    }, [dispatch, page, selectedGenreId, genreId, selectedSortBy, selectedSort])

    return (
        <div>
            <div className={styles.wrapper}>
                {movies.map((movie) => (
                    <MoviesListCard key={movie.id} movie={movie}/>
                ))}
            </div>
        </div>
    );
};

export {MoviesList};
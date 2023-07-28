import React, {useEffect, useState} from 'react';

import styles from './MoviesListCard/MoviesListCard.module.css'
import {moviesService} from "../../services";
import {MoviesListCard} from "./MoviesListCard/MoviesListCard";


const MoviesList = ({ selectedGenreId }) => {
    const [movies, setMovies] = useState([]);

    useEffect( () => {
        moviesService.getAll().then(({data}) => setMovies(data.results))
    }, [])

    const filteredMovies = selectedGenreId
        ? movies.filter((movie) => movie.genre_ids.includes(selectedGenreId))
        : movies;

    return (
        <div className={styles.wrapper}>
            {filteredMovies.map((movie) => (
                <MoviesListCard key={movie.id} movie={movie}/>
            ))}
        </div>
    );
};

export {MoviesList};
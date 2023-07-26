import React, {useEffect, useState} from 'react';

import styles from './MoviesListCard/MoviesListCard.module.css'
import {moviesService} from "../../services";
import {MoviesListCard} from "./MoviesListCard/MoviesListCard";

const MoviesList = () => {
    const [movies, setMovies] = useState([]);

    useEffect( () => {
        moviesService.getAll().then(({data}) => setMovies(data.results))
    }, [])

    return (
        <div className={styles.wrapper}>
            {movies.map((movie) => (
                <MoviesListCard key={movie.id} movie={movie}/>
            ))}
        </div>
    );
};

export {MoviesList};
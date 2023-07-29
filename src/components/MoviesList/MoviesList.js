import React, {useEffect, useState} from 'react';

import styles from './MoviesListCard/MoviesListCard.module.css'
import {moviesService} from "../../services";
import {MoviesListCard} from "./MoviesListCard/MoviesListCard";
import {Pagination} from "../Pagination/Pagination";


const MoviesList = ({selectedGenreId}) => {
    const [movies, setMovies] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 3;

    useEffect(() => {
        moviesService.getAll().then(({data}) => setMovies(data.results))
    }, [])

    const filteredMovies = selectedGenreId
        ? movies.filter((movie) => movie.genre_ids.includes(selectedGenreId))
        : movies;

    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    return (
        <div >
            <div className={styles.wrapper}>
                {currentMovies.map((movie) => (
                    <MoviesListCard key={movie.id} movie={movie}/>
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                itemsPerPage={moviesPerPage}
                totalItems={filteredMovies.length}
                onNextPage={handleNextPage}
                onPrevPage={handlePrevPage}
            />
        </div>
    );
};

export {MoviesList};
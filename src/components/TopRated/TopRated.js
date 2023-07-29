import React, {useEffect, useState} from 'react';

import styles from "./TopRatedCard/TopRatedCard.module.css";
import {TopRatedCard} from "./TopRatedCard/TopRatedCard";
import { topRatedService} from "../../services";
import {SortComponent} from "../Sort/Sort";
import {Pagination} from "../Pagination/Pagination";

const TopRated = () => {
    const [topRated, setTopRated] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortedTopRated, setSortedTopRated] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 3;

    useEffect( () => {
        topRatedService.getAll(sortOrder).then(({data}) => setTopRated(data.results))
    }, [sortOrder])

    useEffect(() => {
        const sorted = [...topRated].sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.vote_average - b.vote_average;
            } else {
                return b.vote_average - a.vote_average;
            }
        });
        setSortedTopRated(sorted);
    }, [topRated, sortOrder]);

    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = sortedTopRated.slice(indexOfFirstMovie, indexOfLastMovie);
    const handleSortChange = (newSortOrder) => {
        setSortOrder(newSortOrder);
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };


    return (
        <div>
            <div className={styles.wrapper}>
                <SortComponent sortOrder={sortOrder} onSortChange={handleSortChange} />
                <div className={styles.containerFilm}>
                    {currentMovies.map((topRat) => (
                        <TopRatedCard key={topRat.id} topRat={topRat} />
                    ))}
                </div>
        </div>
            <Pagination
                currentPage={currentPage}
                itemsPerPage={moviesPerPage}
                totalItems={sortedTopRated.length}
                onNextPage={handleNextPage}
                onPrevPage={handlePrevPage}
            />
        </div>
    );
};

export {TopRated};
import React, {useEffect, useState} from 'react';

import styles from "./TopRatedCard/TopRatedCard.module.css";
import {TopRatedCard} from "./TopRatedCard/TopRatedCard";
import { topRatedService} from "../../services";
import {SortComponent} from "../Sort/Sort";

const TopRated = () => {
    const [topRated, setTopRated] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortedTopRated, setSortedTopRated] = useState([]);


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

    const handleSortChange = (newSortOrder) => {
        setSortOrder(newSortOrder);
    };

    return (
        <div>
            <div className={styles.wrapper}>
                <SortComponent sortOrder={sortOrder} onSortChange={handleSortChange} />
                <div className={styles.containerFilm}>
                    {sortedTopRated.map((topRat) => (
                        <TopRatedCard key={topRat.id} topRat={topRat} />
                    ))}
                </div>
        </div>
        </div>
    );
};

export {TopRated};
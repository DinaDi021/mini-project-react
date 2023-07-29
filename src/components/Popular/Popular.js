import React, {useEffect, useState} from 'react';

import {popularService} from "../../services";
import {PopularCard} from "./PopularCard/PopularCard";
import styles from "../Upcoming/UpcomingCard/UpcomingCard.module.css";

const Popular = () => {
    const [popularMovies, SetPopularMovies] = useState([]);

    useEffect( () => {
        popularService.getAll().then(({data}) => SetPopularMovies(data.results))
    }, [])

    return (
        <div className={styles.container}>
            <h3>Popular now:</h3>
            {popularMovies.map((popularMovie) => (
                <PopularCard key={popularMovie.id} popularMovie={popularMovie}/>
            ))}
        </div>
    );
};

export {Popular};
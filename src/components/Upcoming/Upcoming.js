import React, {useEffect, useState} from 'react';

import styles from './UpcomingCard/UpcomingCard.module.css'
import {upcomingService} from "../../services";
import {UpcomingCard} from "./UpcomingCard/UpcomingCard";

const Upcoming = () => {
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect( () => {
        upcomingService.getAll().then(({data}) => setUpcomingMovies(data.results))
    }, [])

    return (
        <div className={styles.container}>
            <h3>Released soon:</h3>
            {upcomingMovies.map((upcomingMovie) => (

                <UpcomingCard key={upcomingMovie.id} upcomingMovie={upcomingMovie}/>
            ))}
        </div>
    );
};

export {Upcoming};
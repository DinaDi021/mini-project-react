import React, {useEffect, useState} from 'react';

import styles from "../MoviesList/MoviesListCard/MoviesListCard.module.css";
import {TopRatedCard} from "./TopRatedCard/TopRatedCard";
import { topRatedService} from "../../services";

const TopRated = () => {
    const [topRated, setTopRated] = useState([]);

    useEffect( () => {
        topRatedService.getAll().then(({data}) => setTopRated(data.results))
    }, [])


    return (
        <div className={styles.wrapper}>
            {topRated.map((topRat) => (
                <TopRatedCard key={topRat.id} topRat={topRat}/>
            ))}
        </div>
    );
};

export {TopRated};
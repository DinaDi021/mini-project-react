import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import styles from "../Upcoming/UpcomingCard/UpcomingCard.module.css";

import {PopularCard} from "./PopularCard/PopularCard";
import {popularActions} from "../../redux";

const Popular = () => {
    const dispatch = useDispatch();
    const {popularMovies} = useSelector(state => state.popular)
    const [query, setQuery] = useSearchParams({page: '1'})
    const page = query.get('page');

    useEffect( () => {
      dispatch(popularActions.getMovies({page}));
    }, [dispatch, page])

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
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import styles from './UpcomingCard/UpcomingCard.module.css'

import {UpcomingCard} from "./UpcomingCard/UpcomingCard";
import {upcomingActions} from "../../redux";

const Upcoming = () => {
    const dispatch = useDispatch();
    const {upcomingMovies} = useSelector(state => state.upcoming);
    const [query, setQuery] = useSearchParams({page: '1'})
    const page = query.get('page')

    useEffect(() => {
        dispatch(upcomingActions.getMovies({page}))
    }, [dispatch, page])

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
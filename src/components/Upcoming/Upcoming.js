import React, {useEffect} from 'react';

import styles from './UpcomingCard/UpcomingCard.module.css'
import {UpcomingCard} from "./UpcomingCard/UpcomingCard";
import {useDispatch, useSelector} from "react-redux";
import {upcomingActions} from "../../redux/slices/upcomongSlice";
import {useSearchParams} from "react-router-dom";

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
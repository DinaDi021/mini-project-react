import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import styles from "./TopRatedCard/TopRatedCard.module.css";

import {TopRatedCard} from "./TopRatedCard/TopRatedCard";
import {topRatedActions} from "../../redux";
import {IsLoading} from "../IsLoading/IsLoading";

const TopRated = () => {
    const dispatch = useDispatch();
    const {isLoading} = useSelector(state => state.progress)
    const {topRated } = useSelector(state => state.topRated);
    const [query, setQuery] = useSearchParams({page: '1'})
    const page = query.get('page');

    useEffect(() => {
        dispatch(topRatedActions.getTopRatedMovies({page}));
    }, [dispatch, page]);

    return (
        <div>
            {isLoading ? (
                <IsLoading />
            ) : (
                <div className={styles.wrapper}>
                    <div className={styles.containerFilm}>
                        {topRated.map((topRat) => (
                            <TopRatedCard key={topRat.id} topRat={topRat}/>
                        ))}
                    </div>
                </div>
                )}
        </div>
    );
};

export {TopRated};
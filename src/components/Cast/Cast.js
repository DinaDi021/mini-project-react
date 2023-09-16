import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import styles from './CastDetails/CastDetails.module.css'

import {CastDetails} from "./CastDetails/CastDetails";
import {actorsActions} from "../../redux";
const Cast = () => {
    const dispatch = useDispatch();
    const {actors} = useSelector(state => state.actors)
    const {selectedMovie} = useSelector(state => state.movies)

    useEffect(() => {
        dispatch(actorsActions.getActorsByMovieId({id: selectedMovie.id}))
    }, [dispatch, selectedMovie])

    return (
        <div className={styles.container}>
            {actors.slice(0, 10).map((actor) => (
                <CastDetails key={actor.id} actor={actor}/>
            ))}
        </div>
    );
};

export {Cast};
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {movieService} from "../../services";
import styles from "../MoviesList/MoviesListCard/MoviesListCard.module.css";
import {MovieDetails} from "./MovieDetails/MovieDetails";

const MovieInfo = () => {
    const [movie, setMovie] = useState([]);
    const {id} = useParams()

    useEffect( () => {
        movieService.getById(id).then(({data}) => setMovie(data))
    }, [id])

    return (
        <div className={styles.wrapper}>
            {movie && <MovieDetails movie={movie}/>}
        </div>
    );
};

export {MovieInfo};
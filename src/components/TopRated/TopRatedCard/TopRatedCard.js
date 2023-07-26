import React from 'react';
import styles from "../../MoviesList/MoviesListCard/MoviesListCard.module.css";
import {StarRating} from "../../StarsRating/StarsRating";

const TopRatedCard = ({topRat}) => {
    const {title, vote_average, poster_path} = topRat;
    const baseURL = 'https://image.tmdb.org/t/p/';
    const imageSize = 'w500';
    const imageURL = baseURL + imageSize + poster_path;

    return (
        <div>
            <div>
                <h2>{title}</h2>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <StarRating value={vote_average} />
                    <span style={{ marginLeft: '10px' }}>{vote_average}</span>
                </div>
            </div>
            <div>
                <img className={styles.image} src={imageURL} alt={title} />
            </div>
        </div>
    );
};

export {TopRatedCard};
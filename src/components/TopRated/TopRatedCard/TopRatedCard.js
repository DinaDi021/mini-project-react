import React, {useContext} from 'react';
import styles from "../TopRatedCard/TopRatedCard.module.css";
import {StarRating} from "../../StarsRating/StarsRating";
import {Link} from "react-router-dom";
import {RatedContext} from "../../../pages";

const TopRatedCard = ({topRat}) => {
    const {id, title, vote_average, poster_path} = topRat;
    const baseURL = 'https://image.tmdb.org/t/p/';
    const imageSize = 'w500';
    const imageURL = baseURL + imageSize + poster_path;

    const {setMovieId} = useContext(RatedContext);

    const handleClick = () => {
        setMovieId(id);
    };

    return (
        <div className={styles.CardFilm}>
            <Link to={`/movie/${id}`} onClick={handleClick}>
                <div>
                    <div>
                        <h2>{title}</h2>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <StarRating value={vote_average}/>
                            <span style={{marginLeft: '10px'}}>{vote_average}</span>
                        </div>
                    </div>
                    <div>
                        <img className={styles.image} src={imageURL} alt={title}/>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export {
    TopRatedCard
};
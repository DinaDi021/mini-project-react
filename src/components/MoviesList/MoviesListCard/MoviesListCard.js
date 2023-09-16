import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import styles from './MoviesListCard.module.css'

import {moviesActions} from "../../../redux";
import {StarRating} from "../../StarRating/StarRating";

const MoviesListCard = ({movie}) => {
    const dispatch = useDispatch();
    const {id, title, poster_path, vote_average} = movie;
    const baseURL = 'https://image.tmdb.org/t/p/';
    const imageSize = 'w500';
    const imageURL = baseURL + imageSize + poster_path;

    const handleMovieClick = () => {
        dispatch(moviesActions.setSelectedMovie(movie));
    };

    return (
        <div className={styles.container}>
            <Link to={`/movie/${id}`} onClick={handleMovieClick}>
            <div>
                <img className={styles.image} src={imageURL} alt={title}/>
                <div className={styles.stars}>
                    <StarRating value={vote_average}/>
                    <span style={{marginLeft: '10px'}}>{vote_average}</span>
                </div>
            </div>
            </Link>
        </div>
    );
};

export {MoviesListCard};
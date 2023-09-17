import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import styles from '../../Upcoming/UpcomingCard/UpcomingCard.module.css'

import {moviesActions} from "../../../redux";

const PopularCard = ({popularMovie}) => {
    const dispatch = useDispatch();
    const {id, title, poster_path} = popularMovie;
    const baseURL = 'https://image.tmdb.org/t/p/';
    const imageSize = 'w500';
    const imageURL = baseURL + imageSize + poster_path;

    const handleMovieClick = () => {
        dispatch(moviesActions.setSelectedMovie(popularMovie));
    };

    return (
        <Link to={`/movie/${id}`} onClick={handleMovieClick}>
            <div className={styles.UpcomingCard}>

                <h4>{title}</h4>
                <img src={imageURL} alt={title}/>
            </div>
        </Link>
    );
};

export {PopularCard};
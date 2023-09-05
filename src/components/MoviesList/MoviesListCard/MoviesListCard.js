import {Link} from "react-router-dom";

import styles from './MoviesListCard.module.css'

const MoviesListCard = ({movie}) => {
    const {id, title, poster_path} = movie;
    const baseURL = 'https://image.tmdb.org/t/p/';
    const imageSize = 'w500';
    const imageURL = baseURL + imageSize + poster_path;

    return (
        <div className={styles.container}>
            <Link to={`/movie/${id}`}>
            <div>
                <img className={styles.image} src={imageURL} alt={title}/>
            </div>
            </Link>
        </div>
    );
};

export {MoviesListCard};
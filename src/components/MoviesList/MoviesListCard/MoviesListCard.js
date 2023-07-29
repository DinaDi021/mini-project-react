import {Link} from "react-router-dom";
import {useContext} from "react";

import styles from './MoviesListCard.module.css'
import {Context} from "../../../pages";

const MoviesListCard = ({movie}) => {
    const {id, title, poster_path} = movie;
    const baseURL = 'https://image.tmdb.org/t/p/';
    const imageSize = 'w500';
    const imageURL = baseURL + imageSize + poster_path;

    const {setMovieId} = useContext(Context);

    const handleClick = () => {
        setMovieId(id);
    };

    return (
        <div className={styles.container}>
            <Link to={`/movie/${id}`} onClick={handleClick}>
            <div>
                <img className={styles.image} src={imageURL} alt={title}/>
            </div>
            </Link>
        </div>
    );
};

export {MoviesListCard};
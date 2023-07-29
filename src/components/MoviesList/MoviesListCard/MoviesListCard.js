import {useNavigate} from "react-router-dom";
import {useContext} from "react";

import styles from './MoviesListCard.module.css'
import {Context} from "../../../pages";


const MoviesListCard = ({movie}) => {
    const {id, title, poster_path} = movie;
    const baseURL = 'https://image.tmdb.org/t/p/';
    const imageSize = 'w500';
    const imageURL = baseURL + imageSize + poster_path;

    const navigate = useNavigate();
    const {setMovieId} = useContext(Context);

    const handleClick = () => {
        navigate(`/movie/${id}`);
        setMovieId(id)
    }

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <button className={styles.btn} onClick={handleClick}>More info: {title}</button>
            </div>
            <div>
                <img className={styles.image} src={imageURL} alt={title}/>
            </div>
        </div>
    );
};

export {MoviesListCard};
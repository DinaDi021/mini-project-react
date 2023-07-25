import styles from './MoviesListCard.module.css'
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../../../pages";


const MoviesListCard = ({movie}) => {
    const {id, original_title, poster_path} = movie;
    const baseURL = 'https://image.tmdb.org/t/p/';
    const imageSize = 'w500';
    const imageURL = baseURL + imageSize + poster_path;

    // const handleClick = () => {
    //     navigate(`movie/${id}`);
    //     setMovieId(id)
    // }

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <button className={styles.btn}>Watch: {original_title}</button>
            </div>
            <div>
                <img className={styles.image} src={imageURL} alt={original_title}/>
            </div>
        </div>
    );
};

export {MoviesListCard};
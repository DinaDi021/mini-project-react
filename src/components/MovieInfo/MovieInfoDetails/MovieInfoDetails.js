import styles from './MovieInfo.module.css'
import {PosterPreview} from "../../PosterPreview/PosterPreview";

const MovieInfoDetails = ({movie}) => {
    const {title, overview, release_date, vote_average, poster_path} = movie;
    const baseURL = 'https://image.tmdb.org/t/p/';
    const imageSize = 'w500';
    const imageURL = baseURL + imageSize + poster_path;


    return (
        <div className={styles.filmCard}>
            <div className={styles.filmInfo}>
                <h2>{title}</h2>
                <h2>Rating: {vote_average}</h2>
                <div>
                    <h4>Overview:</h4>
                    <p>{overview}</p>
                </div>
                <p><b>Release_date:</b> {release_date}</p>
                <div>
                    <PosterPreview/>
                </div>
            </div>
            <div>
                <img className={styles.filmImg} src={imageURL} alt={title}/>
            </div>
        </div>
    );
};

export {MovieInfoDetails};
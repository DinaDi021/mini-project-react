import styles from './MovieInfo.module.css'

import {PosterPreview} from "../../PosterPreview/PosterPreview";
import {GenreBadge} from "../../Genre/GenreBadge";
import {Genre} from "../../Genre/Genre";
import {Cast} from "../../Cast/Cast";

const MovieInfoDetails = ({selectedMovie}) => {
    const {title, overview, release_date, vote_average, poster_path} = selectedMovie;
    const baseURL = 'https://image.tmdb.org/t/p/';
    const imageSize = 'w500';
    const imageURL = baseURL + imageSize + poster_path;

    return (
        <div className={styles.filmCard}>
            <div className={styles.filmInfo}>
                <h2>{title}</h2>
                <h2>Rating: {vote_average}
                </h2>
                <div>
                    <h4>Overview:</h4>
                    <p>{overview}</p>
                </div>
                <p><b>Release date:</b> {release_date}</p>
                <Genre/>
                <GenreBadge/>
                <div>
                    <PosterPreview/>
                </div>
                <div>
                   <h2>
                       Actors starring:
                   </h2>
                    <Cast/>
                </div>
            </div>
            <div>
                <img className={styles.filmImg} src={imageURL} alt={title}/>
            </div>

        </div>
    );
};

export {MovieInfoDetails};
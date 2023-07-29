import styles from '../../Upcoming/UpcomingCard/UpcomingCard.module.css'
import {Link} from "react-router-dom";
import {useContext} from "react";
import {UpcomingContext} from "../../Sidebar/Sidebar";

const PopularCard = ({popularMovie}) => {
    const {id, title, poster_path} = popularMovie;
    const baseURL = 'https://image.tmdb.org/t/p/';
    const imageSize = 'w500';
    const imageURL = baseURL + imageSize + poster_path;

    const {setMovieId} = useContext(UpcomingContext)
    const handleClick = () => {
        setMovieId(id);
    };

    return (
        <Link to={`/movie/${id}`} onClick={handleClick}>
            <div className={styles.UpcomingCard}>

                <h4>{title}</h4>
                <img src={imageURL} alt={title}/>
            </div>
        </Link>
    );
};

export {PopularCard};
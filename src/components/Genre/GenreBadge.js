import {useDispatch, useSelector} from "react-redux";
import styles from '../MovieInfo/MovieInfoDetails/MovieInfo.module.css'
import {Link} from "react-router-dom";
import {genreActions} from "../../redux";
import {useEffect} from "react";

const GenreBadge = () => {
    const dispatch = useDispatch();
    const {genres, selectedGenreId} = useSelector(state => state.genres);
    const {selectedMovie} = useSelector(state => state.movies)
    const selectedMovieGenres = selectedMovie.genre_ids

    useEffect(() => {
        dispatch(genreActions.getGenre())
    }, [dispatch]);

    const selectedGenres = selectedMovieGenres.map((genreId) => {
        return genres.find((genre) => genre.id === genreId)?.name || "";
    });

    const handleGenreClick = (genreId) => {
        dispatch(genreActions.setGenre(genreId));
    };

    return (
        <div className={styles.GenreBadge}>
            {selectedGenres.map((genreName, index) => {
                const genre = genres.find((genre) => genre.name === genreName);
                return (
                    <Link
                        key={index}
                        to={`/movies?genre=${genreName}`}
                    >
                        <button
                            className={selectedGenreId === genre?.id ? styles.activeButton : ''}
                            onClick={() => handleGenreClick(genre?.id)}>
                            {genreName}
                        </button>
                    </Link>
                );
            })}
        </div>
    );
};

export {GenreBadge};

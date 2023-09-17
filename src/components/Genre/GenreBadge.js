import {useDispatch, useSelector} from "react-redux";
import {Link, useSearchParams} from "react-router-dom";

import styles from '../MovieInfo/MovieInfoDetails/MovieInfo.module.css'

import {genreActions} from "../../redux";

const GenreBadge = () => {
    const dispatch = useDispatch();
    const {genres, selectedGenreId} = useSelector(state => state.genres);
    const {selectedMovie} = useSelector(state => state.movies)
    const selectedMovieGenres = selectedMovie.genre_ids
    const [query, setQuery] = useSearchParams();

    const handleGenreClick = (genreId) => {
        setQuery({ ...query, genreId });
        dispatch(genreActions.setGenre({ id: genreId }));
    };

    return (
        <div className={styles.GenreBadge}>
            {selectedMovieGenres.map((genreId, index) => {
                const genre = genres.find((genre) => genre.id === genreId);
                return (
                    <Link
                        key={index}
                        to={`/movies?genreId=${genreId}`}
                    >
                        <button
                            key={index}
                            className={selectedGenreId === genre.id ? styles.activeButton : ''}
                            onClick={() => handleGenreClick(genre.id)}
                        >
                            {genre.name}
                        </button>
                    </Link>
                );
            })}
        </div>
    );
};

export {GenreBadge};

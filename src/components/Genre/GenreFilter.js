import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import styles from './GenreBadge.module.css'

import {genreActions} from "../../redux";

const GenreFilter = () => {
    const dispatch = useDispatch();
    const {genres, selectedGenreId } = useSelector(state => state.genres);
    const [query, setQuery] = useSearchParams();

    const handleGenreClick = (genreId) => {
            setQuery({ ...query, genreId });
            dispatch(genreActions.setGenre({ id: genreId }));
    };

    return (
        <div className={styles.container}>
            {genres.map((genre) => (
                <button
                    key={genre.id}
                    onClick={() => handleGenreClick(genre.id)}
                    className={selectedGenreId === genre.id ? styles.activeButton : ''}
                >
                    {genre.name}
                </button>
            ))}
        </div>
    );
};

export {GenreFilter};

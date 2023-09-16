import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import styles from './GenreBadge.module.css'

import {genreActions, moviesActions} from "../../redux";

const GenreFilter = () => {
    const dispatch = useDispatch();
    const {genres, selectedGenreId } = useSelector(state => state.genres);
    const [query, setQuery] = useSearchParams();
    const selectedGenre = query.get('genreId');

    useEffect(() => {
        if (selectedGenre) {
            const genreIdFromName = genres.find((genre) => genre.name === selectedGenre)?.id;
            if (genreIdFromName) {
                dispatch(genreActions.setGenre({ id: genreIdFromName, name: selectedGenre }));
            }
        }
    }, [dispatch, genres, selectedGenre]);

    const handleGenreClick = (genreId, genreName) => {
        const genre = genres.find((genre) => genre.id === genreId);
        if (genre) {
            setQuery({ ...query, genreId: genre.name });
            dispatch(genreActions.setGenre({ id: genreId, name: genreName }));
        }
        dispatch(moviesActions.clearSort());
    };

    return (
        <div className={styles.container}>
            {genres.map((genre) => (
                <button
                    key={genre.id}
                    onClick={() => handleGenreClick(genre.id, genre.name)} // Передаем нейм жанра в обработчик
                    className={selectedGenreId === genre.id ? styles.activeButton : ''}
                >
                    {genre.name}
                </button>
            ))}
        </div>
    );
};

export {GenreFilter};

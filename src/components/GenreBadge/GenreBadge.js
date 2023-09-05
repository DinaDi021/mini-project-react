import {useEffect, useState} from "react";

import styles from './GenreBadge.module.css'
import {useDispatch, useSelector} from "react-redux";
import {genreActions} from "../../redux";
import {useSearchParams} from "react-router-dom";

const GenreBadge = () => {
    const dispatch = useDispatch();
    const {genres} = useSelector(state => state.genres);
    const [query, setQuery] = useSearchParams();

    const [activeGenreId, setActiveGenreId] = useState(null);

    useEffect(() => {
        dispatch(genreActions.getGenre())
    }, [dispatch]);

    const handleGenreClick = (genreId) => {
        const genre = genres.find((genre) => genre.id === genreId);
        if (genre) {
            setQuery({...query, page: 1, genre: genre.name});
            dispatch(genreActions.setGenre(genreId));
            setActiveGenreId(genreId);
        }
    };

    return (
        <div className={styles.container}>
            {genres.map((genre) => (
                <button
                    key={genre.id}
                    onClick={() => handleGenreClick(genre.id, genre.name)}
                    className={activeGenreId === genre.id ? "active-button" : ""}
                >
                    {genre.name}
                </button>
                    ))}
                </div>
            );
            };

            export {GenreBadge};

import { useEffect, useState } from "react";

import styles from './GenreBadge.module.css'
import { genreService } from "../../services";

const GenreBadge = ({ onSelectGenre }) => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        genreService.getAll()
            .then(({ data }) => {
                    setGenres(data.genres);
            })
    }, []);

    const handleGenreClick = (genreId) => {
        onSelectGenre(genreId);
    };

    return (
        <div className={styles.container}>
            {genres.map((genre) => (
                <button key={genre.id} onClick={() => handleGenreClick(genre.id)}>{genre.name}</button>
            ))}
        </div>
    );
};

export { GenreBadge };

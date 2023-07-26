import { useEffect, useState } from "react";
import { genreService } from "../../services";

const GenreBadge = () => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        genreService.getAll()
            .then(({ data }) => {
                    setGenres(data.genres);
            })
    }, []);

    return (
        <div>
            {genres.map((genre) => (
                <p key={genre.id}>{genre.name}</p>
            ))}
        </div>
    );
};

export { GenreBadge };

import {useSearchParams} from "react-router-dom";

import styles from './MoviesPage.module.css'
import {GenreBadge, MoviesList} from "../../components";
import {Pagination} from "@mui/material";
import {useSelector} from "react-redux";


const MoviesPage = () => {
    const [query, setQuery] = useSearchParams()
    const {totalPages} = useSelector(state => state.movies)
    const currentPage = query.get('page') || '1';
    const selectedGenre = query.get('genre') || '';

    return (
        <div className={styles.Container}>
            <div className={styles.MoviesPage}>
                <GenreBadge/>
                <MoviesList/>
            </div>
            <div className={styles.Pagination}>
                <Pagination
                    count={totalPages}
                    page={+currentPage - 1}
                    variant="outlined"
                    color="secondary"
                    onChange={(e, page) => setQuery({page: page.toString(), genre: selectedGenre})}/>
            </div>
        </div>
    );
};

export {
    MoviesPage
};
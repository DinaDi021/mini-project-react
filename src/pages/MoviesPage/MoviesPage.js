import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Pagination} from "@mui/material";
import {useEffect} from "react";

import styles from './MoviesPage.module.css'
import {GenreBadge, MoviesList} from "../../components";
import {genreActions} from "../../redux";



const MoviesPage = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams()
    const {totalPages} = useSelector(state => state.movies)
    const currentPage = +query.get('page') || '1';
    const selectedGenre = query.get('genre') || '';

    useEffect(() => {
        dispatch(genreActions.clearGenre());
    }, [dispatch]);


    const queryParams = {
        page: currentPage.toString(),
        ...(selectedGenre && { genre: selectedGenre }),
    };

    return (
        <div className={styles.Container}>
            <div className={styles.MoviesPage}>
                <GenreBadge/>
                <MoviesList/>
            </div>
            <div className={styles.Pagination}>
                <Pagination
                    count={totalPages}
                    page={+currentPage}
                    variant="outlined"
                    color="secondary"
                    onChange={(e, page) => {
                        queryParams.page = page.toString();
                        setQuery(queryParams);
                    }}/>
            </div>
        </div>
    );
};

export {
    MoviesPage
};
import {useSelector} from "react-redux";

import styles from './MoviesPage.module.css'

import {Genre, GenreFilter, MoviesList, Paginations, SortComponent} from "../../components";

const MoviesPage = () => {
    const {totalPages} = useSelector(state => state.movies);

    return (
        <div className={styles.Container}>
            <SortComponent/>
            <div className={styles.MoviesPage}>
                <Genre/>
                <GenreFilter/>
                <MoviesList/>
            </div>
            <div className={styles.Pagination}>
                <Paginations totalPages={totalPages}/>
            </div>
        </div>
    );
};

export {
    MoviesPage
};
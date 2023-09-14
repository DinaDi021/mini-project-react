import styles from './MoviesPage.module.css'
import {GenreFilter, MoviesList, Paginations} from "../../components";
import {useSelector} from "react-redux";
const MoviesPage = () => {
    const {totalPages} = useSelector(state => state.movies);

    return (
        <div className={styles.Container}>
            <div className={styles.MoviesPage}>
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
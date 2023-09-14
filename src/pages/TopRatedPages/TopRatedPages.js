import {Paginations, TopRated} from "../../components";
import styles from "../MoviesPage/MoviesPage.module.css";
import {useSelector} from "react-redux";

const TopRatedPages = () => {
    const {totalPages} = useSelector(state => state.topRated);

    return (
        <div>
                <div>
                    <TopRated/>
                </div>
                <div className={styles.Pagination}>
                    <Paginations totalPages={totalPages}/>
                </div>
        </div>
    );
};

export {TopRatedPages};
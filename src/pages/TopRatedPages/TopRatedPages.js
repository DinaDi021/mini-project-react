import {useSelector} from "react-redux";

import styles from "../MoviesPage/MoviesPage.module.css";

import {Paginations, TopRated} from "../../components";



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
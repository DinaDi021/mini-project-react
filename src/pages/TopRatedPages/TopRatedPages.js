import {createContext, useState} from "react";

import {Paginations, TopRated} from "../../components";
import styles from "../MoviesPage/MoviesPage.module.css";
import {useSelector} from "react-redux";

const RatedContext = createContext(null);
const TopRatedPages = () => {
    const {totalPages} = useSelector(state => state.topRated);

    const [movieId, setMovieId] = useState(null);
    return (
        <div>
            <RatedContext.Provider value={{setMovieId}}>
                <div>
                    <TopRated/>
                </div>
                <div className={styles.Pagination}>
                    <Paginations totalPages={totalPages}/>
                </div>
            </RatedContext.Provider>
        </div>
    );
};

export {TopRatedPages, RatedContext};
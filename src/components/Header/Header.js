import {Link, useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";

import styles from './Header.module.css'

import {UserInfo} from "../UserInfo/UserInfo";
import {genreActions, moviesActions, searchMoviesActions} from "../../redux";

const Header = () => {
    const dispatch = useDispatch();
    const {pathname} = useLocation()
    const handleMoviesClick = () => {
        dispatch(genreActions.clearGenre());
        dispatch(moviesActions.clearSort())
        dispatch(searchMoviesActions.clearSearchMovies())
    };

    return (
        <div className={styles.container}>
            <Link
                style={{ color: pathname === '/movies' ? 'black' : 'white' }}
                to="/movies"
                onClick={handleMoviesClick}
            >
                Movies
            </Link>
            <Link
                style={{ color: pathname === '/topRated' ? 'black' : 'white' }}
                to="/topRated"
            >
                TopRated
            </Link>
            <Link
                style={{ color: pathname === '/search' ? 'black' : 'white' }}
                to="/search"
                onClick={handleMoviesClick}
            >
                Search
            </Link>
            <UserInfo/>
        </div>
    );
};

export {Header};
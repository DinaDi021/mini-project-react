import {Link, useLocation} from "react-router-dom";

import styles from './Header.module.css'
import {UserInfo} from "../UserInfo/UserInfo";
import {useDispatch} from "react-redux";
import {genreActions} from "../../redux";

const Header = () => {
    const dispatch = useDispatch();
    const {pathname} = useLocation()
    const handleMoviesClick = () => {
        dispatch(genreActions.clearGenre());
    };

    const links = [
        {
            path: '/movies',
            label: 'Movies'
        },
        {
            path: '/topRated',
            label: 'TopRated'
        },
    ]

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
            <UserInfo />
        </div>
    );
};

export {Header};
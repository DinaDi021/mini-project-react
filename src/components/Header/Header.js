import React from 'react';
import {Link, useLocation} from "react-router-dom";

import styles from './Header.module.css'

const Header = () => {
    const links = [
        {
            path: '/movies',
            label: 'Movies'
        },
        {
            path: '/tvShows',
            label: 'TvShows'
        },
        {
            path: '/genre',
            label: 'Genre'
        }
    ]
    const {pathname} = useLocation()

    return (
        <div className={styles.container}>
            {links.map((link) => (
                <Link key={link.path}
                      style={{color: link.path === pathname ? 'black' : 'white'}}
                      to={link.path}>
                    {link.label}
                </Link>
            ))}
        </div>
    );
};

export {Header};
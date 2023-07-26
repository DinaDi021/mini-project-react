import React from 'react';
import {Link, useLocation} from "react-router-dom";

import styles from './Header.module.css'
import {UserInfo} from "../UserInfo/UserInfo";

const Header = () => {
    const links = [
        {
            path: '/movies',
            label: 'Movies'
        },
        {
            path: '/topRated',
            label: 'TopRated'
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
            <UserInfo/>
        </div>
    );
};

export {Header};
import React from 'react';
import Posts from "./components/ClassComponents/Posts/Posts";
import Comments from "./components/ClassComponents/Comments/Comments";
import styles from './app.module.css';

const App = () => {
    return (
        <div className={styles.wrapper}>
            <Posts/>
            <Comments/>
        </div>
    );
};

export {App};

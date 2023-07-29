import {createContext, useState} from "react";

import styles from './Sidebar.module.css'
import {Upcoming} from "../Upcoming/Upcoming";
import {Popular} from "../Popular/Popular";


const UpcomingContext = createContext(null);

const Sidebar = () => {
    const [movieId, setMovieId] = useState(null);

    return (
        <div className={styles.container}>
            <UpcomingContext.Provider value={{setMovieId}}>
                <Upcoming/>
                <Popular/>
            </UpcomingContext.Provider>

        </div>
    );
};

export {Sidebar, UpcomingContext};
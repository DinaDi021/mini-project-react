import styles from './Sidebar.module.css'

import {Upcoming} from "../Upcoming/Upcoming";
import {Popular} from "../Popular/Popular";

const Sidebar = () => {

    return (
        <div className={styles.container}>
                <Upcoming/>
                <Popular/>
        </div>
    );
};

export {Sidebar};
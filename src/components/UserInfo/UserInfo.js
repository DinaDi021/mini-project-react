import React from 'react';
import { BiDoorOpen } from 'react-icons/bi';

import styles from './UserInfo.module.css'
const UserInfo = () => {
    return (
        <div className={styles.userInfo}>
            <div className={styles.circleStyle}>
                <span>U</span>
            </div>
            <div className={styles.door}>
                <BiDoorOpen size={35} color="white" />
            </div>
        </div>
    );
};

export {UserInfo};
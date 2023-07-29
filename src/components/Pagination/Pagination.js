import React from 'react';
import styles from "../MovieInfo/MovieInfoDetails/MovieInfo.module.css";

const Pagination = ({ currentPage, itemsPerPage, totalItems, onNextPage, onPrevPage }) => {
    const handleNextPage = () => {
        onNextPage();
    };

    const handlePrevPage = () => {
        onPrevPage();
    };

    return (
        <div >
            <div className={styles.containerBtn}>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Previous page
                </button>
                <button onClick={handleNextPage} disabled={currentPage * itemsPerPage >= totalItems}>
                    Next page
                </button>
            </div>
        </div>
    );
};
export {Pagination};
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { videoService } from '../../services/videoService';
import styles from '../MovieInfo/MovieInfoDetails/MovieInfo.module.css'
import {Pagination} from "../Pagination/Pagination";

const PosterPreview = () => {
    const [videos, setVideos] = useState([]);
    const { id, type } = useParams();

    const [currentPage, setCurrentPage] = useState(1);
    const videoPerPage = 1;

    useEffect(() => {
        videoService.getById(id, type).then(({ data }) => setVideos(data.results));
    }, [id, type]);

    const indexOfLastMovie = currentPage * videoPerPage;
    const indexOfFirstMovie = indexOfLastMovie - videoPerPage;
    const currentMovies = videos.slice(indexOfFirstMovie, indexOfLastMovie);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    return (
        <div className={styles.containerVideo}>
            {currentMovies.map((video) => (
                <div key={video.id}>
                    <iframe
                        width="510"
                        height="285"
                        src={`https://www.youtube.com/embed/${video.key}`}
                        title={video.title}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                </div>
            ))}
            <Pagination
            currentPage={currentPage}
            itemsPerPage={videoPerPage}
            totalItems={videos.length}
            onNextPage={handleNextPage}
            onPrevPage={handlePrevPage}
        />
        </div>
    );
};

export { PosterPreview };

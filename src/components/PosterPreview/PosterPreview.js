import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { videoService } from '../../services/videoService';
import styles from '../MovieInfo/MovieInfoDetails/MovieInfo.module.css'

const PosterPreview = () => {
    const [videos, setVideos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        videoService.getById(id).then(({ data }) => {
            const trailers = data.results.filter((video) => video.type === 'Trailer');
            setVideos(trailers);
        });
    }, [id]);

    const currentVideo = videos.length > 0 ? videos[0] : null;

    return (
        <div className={styles.containerVideo}>
            {currentVideo && (
                <div key={currentVideo.id}>
            <iframe
                width="510"
                height="285"
                src={`https://www.youtube.com/embed/${currentVideo.key}`}
                title={currentVideo.title}
                allow="autoplay; encrypted-media"
                allowFullScreen
            ></iframe>
                </div>
            )}
        </div>
    );
};

export { PosterPreview };

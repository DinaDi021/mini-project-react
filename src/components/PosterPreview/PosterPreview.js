import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { videoService } from '../../services/videoService';
import styles from '../MovieInfo/MovieInfoDetails/MovieInfo.module.css'

const PosterPreview = () => {
    const [videos, setVideos] = useState([]);
    const { id, type } = useParams();

    useEffect(() => {
        videoService.getById(id, type).then(({ data }) => setVideos(data.results));
    }, [id, type]);

    return (
        <div className={styles.containerVideo}>
            {videos.map((video) => (
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
        </div>
    );
};

export { PosterPreview };

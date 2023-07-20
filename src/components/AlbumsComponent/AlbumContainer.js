import React from 'react';

const AlbumContainer = ({album}) => {
const {userId, id, title } = album;

    return (
        <div>
            <h3>{userId}</h3>
            <h3>{id}</h3>
            <h2>{title}</h2>
        </div>
    );
};

export {AlbumContainer};
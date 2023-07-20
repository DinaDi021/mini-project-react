import React, {useEffect, useState} from 'react';
import {ContentServices} from "../../services/apiServices";
import {AlbumContainer} from "./AlbumContainer";

const AlbumsComponent = () => {
const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const albumsData = await ContentServices.getAlbums();
                setAlbums(albumsData);

            } catch (error) {
                console.error(error);
            }
        };

        fetchAlbums();
    }, []);

    return (
        <div>
            <div>
                {albums.map(album=><AlbumContainer key={album.id} album={album} />)}
            </div>
        </div>
    );
};

export {AlbumsComponent};
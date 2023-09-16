import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import {genreActions} from "../../redux";

const Genre = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genreActions.getGenre())
    }, [dispatch]);

    return (
        <>
        </>
    );
};

export {Genre};
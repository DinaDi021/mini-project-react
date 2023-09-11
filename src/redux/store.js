import {configureStore} from "@reduxjs/toolkit";
import {genreReducer, moviesReducer, topRatedReducer} from "./slices";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        genres: genreReducer,
        topRated: topRatedReducer
    }
})

export {
    store
}
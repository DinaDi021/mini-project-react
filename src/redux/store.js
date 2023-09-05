import {configureStore} from "@reduxjs/toolkit";
import {genreReducer, moviesReducer} from "./slices";


const store = configureStore({
    reducer: {
        movies: moviesReducer,
        genres: genreReducer
    }
})

export {
    store
}
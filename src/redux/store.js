import {configureStore} from "@reduxjs/toolkit";
import {genreReducer, moviesReducer, topRatedReducer} from "./slices";
import {popularReducer} from "./slices/popularSlice";
import {upcomingReducer} from "./slices/upcomongSlice";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        genres: genreReducer,
        topRated: topRatedReducer,
        popular: popularReducer,
        upcoming: upcomingReducer
    }
})

export {
    store
}
import {configureStore} from "@reduxjs/toolkit";

import {
    actorsReducer,
    genreReducer,
    moviesReducer,
    popularReducer, progressReducer,
    searchMoviesReducer,
    topRatedReducer,
    upcomingReducer
} from "./slices";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        genres: genreReducer,
        topRated: topRatedReducer,
        popular: popularReducer,
        upcoming: upcomingReducer,
        actors: actorsReducer,
        searchMovies: searchMoviesReducer,
        progress: progressReducer
    }
})

export {
    store
}
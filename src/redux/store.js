import {configureStore} from "@reduxjs/toolkit";

import {actorsReducer, genreReducer, moviesReducer, popularReducer, topRatedReducer, upcomingReducer} from "./slices";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        genres: genreReducer,
        topRated: topRatedReducer,
        popular: popularReducer,
        upcoming: upcomingReducer,
        actors: actorsReducer
    }
})

export {
    store
}
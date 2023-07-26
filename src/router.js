import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layout/MainLayout/MainLayout";
import {MoviesPage, NotFoundPage, GenrePage, TvShowsPage} from "./pages";
import {MoviePage} from "./pages/MoviePage/MoviePage";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={'movies'}/>
            },
            {
                path: 'movies',
                element: <MoviesPage/>,
                children: [
                    {
                        path: 'movie/:id',
                        element: <MoviePage/>
                    }
                ]
            },
            {
                path: 'tvShows',
                element: <TvShowsPage/>
            },
            {
                path: 'genre',
                element: <GenrePage/>,
            },
        ]
    },
    {
        path: '*',
        element: <NotFoundPage/>
    }
]);

export {router}
import {createBrowserRouter, Navigate} from "react-router-dom";

import {MoviesPage, MoviePage, TopRatedPages, NotFoundPage} from "./pages";
import {MainLayout} from "./layout";

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
            },
            {
                path: 'movie/:id',
                element: <MoviePage/>
            },
            {
                path: 'movie/:id/:type',
                element: <MoviePage />
            },
            {
                path: 'topRated',
                element: <TopRatedPages/>
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage/>
    }
]);

export {router}
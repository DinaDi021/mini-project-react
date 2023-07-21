import {AppRoutes} from "./AppRoutes";
import {createBrowserRouter} from "react-router-dom";
import {TodosComponent} from "../components/TodosComponent/TodosComponent";
import {AlbumsComponent} from "../components/AlbumsComponent/AlbumsComponent";
import {CommentsComponent} from "../components/CommentsComponent/CommentsComponent";
import {MainPage} from "../pages/MainPage/MainPage";
import React from "react";
import {AppLayout} from "../components/AppLayout/AppLayoutComponent/AppLayout";
import {PostId} from "../components/PostId/PostId";

export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <h1>Error</h1>,
        children: [
            {
                path: AppRoutes.MAIN,
                element: <MainPage />,
            },
            {
                path: AppRoutes.TODOS,
                element: <TodosComponent />,
            },
            {
                path: AppRoutes.ALBUMS,
                element: <AlbumsComponent/>,
            },
            {
                path: AppRoutes.COMMENTS,
                element: <CommentsComponent/>,
                children: [
                    {
                        path: AppRoutes.POST,
                        element:  <PostId />,
                    }
                ]
            },
        ]
    }
]);
import {AppRoutes} from "./AppRoutes";
import {createBrowserRouter, Outlet} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import {TodosComponent} from "../components/TodosComponent/TodosComponent";
import {AlbumsComponent} from "../components/AlbumsComponent/AlbumsComponent";
import {CommentsComponent} from "../components/CommentsComponent/CommentsComponent";
import {MainPage} from "../pages/MainPage/MainPage";
import {PostId} from "../components/PostID/PostID";
import React from "react";

const AppLayout =()=>(
    <div  style={{height: '100vh', overflow: 'hidden'}}>
        <Navbar />
        <Outlet />
    </div>
);

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
                // children: [
                //     {
                //         path: AppRoutes.POSTID,
                //         element:  <PostId />,
                //     }
                // ]
            },
        ]
    }
]);
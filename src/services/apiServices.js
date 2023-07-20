import React from "react";
import {Endpoints} from "../api/Endpoints";
import axios from "axios";
const {REACT_APP_BASEURL} = process.env;

const instance = axios.create({
    baseURL: REACT_APP_BASEURL
})

export const ContentServices = {
    getTodos: async () => {
        try {
            let response = await instance.get(Endpoints.TODOS);
            return response.data;
        } catch (e) {
            console.error(e);
        }
    },

    getAlbums: async () => {
        try {
            let response = await instance.get(Endpoints.ALBUMS);
            return response.data;
        } catch (e) {
            console.error(e);
        }
    },

    getComments: async () => {
        try {
            let response = await instance.get(Endpoints.COMMENTS);
            return response.data;
        } catch (e) {
            console.error(e);
        }
    },
    // getPosts: async (postId) => {
    //     try {
    //         let response = await instance.get`(Endpoints.POSTS/${postId})`;
    //         return response.data;
    //     } catch (e) {
    //         console.error(e);
    //     }
    // },
};
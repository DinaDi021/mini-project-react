import React from "react";
import {Endpoints} from "../api/Endpoints";
import axios from "axios";
const {REACT_APP_BASEURL} = process.env;

const instance = axios.create({
    baseURL: REACT_APP_BASEURL
})

export const UserServices = {
    userRegistration: async () => {
        try {
            let response = await instance.post(Endpoints.USERS);
            return response.data;
        } catch (e) {
            console.error(e);
        }
    },
};
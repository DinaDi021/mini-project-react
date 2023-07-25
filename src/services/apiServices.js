import axios from "axios";

const apiKey = '35d5e55a0280fc5e6ec8a4b430af1d4b';
const baseURL = 'https://api.themoviedb.org/3';

const apiService = axios.create({
    baseURL,
    params: {
        api_key: apiKey,
    },
});

export {apiService};

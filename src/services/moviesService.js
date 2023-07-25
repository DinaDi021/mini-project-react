import {apiService} from "./apiServices";
import {urls} from "../constants";

const moviesService = {
    getAll: () => apiService.get(urls.movies)
}

export {moviesService}
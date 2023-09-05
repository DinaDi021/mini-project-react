import {apiService} from "./apiServices";
import {urls} from "../constants";

const moviesService = {
    getAll: (page, genreId) => apiService.get(urls.movies, {
        params: {
            page,
            with_genres: genreId
        }
    })
}

export {moviesService}
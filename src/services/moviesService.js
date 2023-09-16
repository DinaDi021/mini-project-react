import {apiService} from "./apiServices";
import {urls} from "../constants";

const moviesService = {
    getAll: (page, genreId, sorted) => apiService.get(urls.movies, {
        params: {
            page,
            with_genres: genreId,
            sort_by: sorted
        }
    })
}

export {moviesService}
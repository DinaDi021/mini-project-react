import {apiService} from "./apiServices";
import {urls} from "../constants";

const movieService = {
    getById: (id) => apiService.get(urls.movie.byId(id))
}

export {movieService}
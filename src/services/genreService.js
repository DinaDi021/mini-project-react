import {apiService} from "./apiServices";
import {urls} from "../constants";

const genreService = {
    getAll: () => apiService.get(urls.genre)
}

export {genreService}
import {apiService} from "./apiServices";
import {urls} from "../constants";

const albumsService = {
    getAll: () => apiService.get(urls.albums)
}

export {albumsService}
import {apiService} from "./apiServices";
import {urls} from "../constants";

const tvShowsService = {
    getAll: () => apiService.get(urls.tv)
}

export {tvShowsService}
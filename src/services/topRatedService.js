import {apiService} from "./apiServices";
import {urls} from "../constants";

const topRatedService = {
    getAll: () => apiService.get(urls.topRated)
}

export {topRatedService}
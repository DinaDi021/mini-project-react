import {apiService} from "./apiServices";
import {urls} from "../constants";

const popularService = {
    getAll: () => apiService.get(urls.popular)
}

export {popularService}
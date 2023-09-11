import {apiService} from "./apiServices";
import {urls} from "../constants";

const topRatedService = {
    getAll: (page) => apiService.get(urls.topRated, {
        params: {page}
    })
}

export {topRatedService}
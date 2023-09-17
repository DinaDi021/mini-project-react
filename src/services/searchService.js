import {apiService} from "./apiServices";
import {urls} from "../constants";

const searchService = {
    getAll: (query, page) => apiService.get(urls.search, {
        params: {query, page}
    })
}

export {searchService}
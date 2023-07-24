import {apiService} from "./apiServices";
import {urls} from "../constants";

const commentsService = {
    getAll: () => apiService.get(urls.comments)
}

export {commentsService}
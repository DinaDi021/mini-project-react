import {apiService} from "./apiServices";
import {urls} from "../constants";

const postService = {
    getById: (id) => apiService.get(urls.posts.byId(id))
}

export {postService}
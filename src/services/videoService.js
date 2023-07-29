import {apiService} from "./apiServices";
import {urls} from "../constants";

const videoService = {
    getById: (videoId) => apiService.get(urls.video.byId(videoId)),
};

export {videoService};

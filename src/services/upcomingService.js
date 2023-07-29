import {apiService} from "./apiServices";
import {urls} from "../constants";

const upcomingService = {
    getAll: () => apiService.get(urls.upcoming)
}

export {upcomingService}
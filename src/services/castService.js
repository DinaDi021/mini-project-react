import {apiService} from "./apiServices";
import {urls} from "../constants";

const castService = {
    getById: (id) => apiService.get(urls.actors.byId(id)),
};

export {castService};

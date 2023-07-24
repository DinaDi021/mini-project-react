import {apiService} from "./apiServices";
import {urls} from "../constants";

const todosService = {
    getAll: () => apiService.get(urls.todos)
}

export {todosService}
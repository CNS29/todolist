import { combineReducers } from "redux";
import reducerTasks from "./tasks";
import displayForm from "./displayForm";
import updateTask from "./updateTask";
import filter from "./filter";
import sort from "./sort"

const myReducer = combineReducers({
    reducerTasks, // tasks: tasks
    displayForm,
    updateTask,
    filter,
    sort
});

export default myReducer;
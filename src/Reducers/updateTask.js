import * as types from "../Constants/constains"

const initialState = null;

const updateTask = (state = initialState, action) => {
    switch(action.type) {
        case types.UPDATE_TASK: {
            return action.task
        }
        default: return state;
    }
}

export default updateTask;
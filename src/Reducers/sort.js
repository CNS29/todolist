import * as types from "../Constants/constains"

const initialState = null;

const sort = (state = initialState, action) => {
    switch(action.type) {
        case types.SORT: {
            return action.data
        }
        default: return state;
    }
}

export default sort;
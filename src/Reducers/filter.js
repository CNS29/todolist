import * as types from "../Constants/constains"

const initialState = {
    name: "",
    status: -1,
    keyword: ""
};

const filter = (state = initialState, action) => {
    let newState = {};
    switch(action.type) {
        case types.FILTER: {
            newState = {
                ...state,
                name: action.data.name,
                status: action.data.status
            };
            return newState
        }
        case types.SEARCH: {
            newState = {
                ...state,
                keyword: action.keyword
            };
            return newState
        }
        default: return state;
    }
}

export default filter;
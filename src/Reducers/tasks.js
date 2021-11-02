import * as types from "../Constants/constains"

let data = JSON.parse(localStorage.getItem("task"))
const initialState = data ? data: [];

  // Tạo chuỗi ngẫu nhiên vd: 5c1454d9-b1cc-1346-1cb7-c4aa46e46d0c
let s4 = () => {
return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

let generateID = () => {
return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
}

const findIndex = (state, id) => {
    for(let i = 0; i < state.length; i++) {
      if(state[i].id === id) {
        return i;
      }
    }
}

const reducerTasks = (state = initialState, action) => {
    let index = -1;
    switch(action.type) {
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK: {
            const {id, name, status} = action.task
            if(!id && id === "") {
                const newTask = {
                    id: generateID(),
                    name: action.task.name,
                    status: action.task.status
                }
                state.push(newTask);
            }else {
                index = findIndex(state, id)
                const newData = {
                    id: id,
                    name: name,
                    status: status
                }
                state[index] = newData;
            }
            localStorage.setItem("task", JSON.stringify(state)); 
            return [...state];
        }
        case types.UPDATE_STATUS: {
            index = findIndex(state, action.id);
            state[index] = {
                ...state[index],    
                status: !state[index].status
            }
            localStorage.setItem("task", JSON.stringify(state));
            return [...state];
        }
        case types.DELETE_TASK: {
            index = findIndex(state, action.id);
            state.splice(index, 1)
            localStorage.setItem("task", JSON.stringify(state));
            return [...state];
        }
        default: return state;
    }
}

export default reducerTasks;
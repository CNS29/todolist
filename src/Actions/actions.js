import * as constains from "../Constants/constains"
export const listAll = () => {
    return {
        type: constains.LIST_ALL
    }
}

export const addTask = (task) => {
    return {
        type: constains.ADD_TASK,
        task
    }
}

export const toggleForm = () => {
    return {
        type: constains.TOGGLE_FORM,
    }
}

export const closeForm = () => {
    return {
        type: constains.CLOSE_FORM,
    }
}

export const openForm = () => {
    return {
        type: constains.OPEN_FORM,
    }
}

export const updateStatus = (id) => {
    return {
        type: constains.UPDATE_STATUS,
        id
    }
}

export const deleteTask = (id) => {
    return {
        type: constains.DELETE_TASK,
        id
    }
}

export const updateTask = (task) => {
    return {
        type: constains.UPDATE_TASK,
        task
    }
}

export const filter = (data) => {
    return {
        type: constains.FILTER,
        data
    }
}

export const search = (keyword) => {
    return {
        type: constains.SEARCH,
        keyword
    }
}

export const sort = (data) => {
    return {
        type: constains.SORT,
        data
    }
}
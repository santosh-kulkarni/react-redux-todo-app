export const addToDo = (todo) => {
    return {
        type: "ADD_TODO",
        payload: {
            todo: todo,
            completed: false
        }
    }
}

export const changeCompleteState = (index) => {
    return {
        type: "CHANGE_TODO_STATE",
        payload: {
            index: index
        }
    }
}



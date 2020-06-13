const initialData = {
    toDoList: []
}

function reducer(state = initialData, action) {
    switch(action.type) {
        case "ADD_TODO": return {
            ...state,
            toDoList: [...state.toDoList, action.payload]
        }
        case "CHANGE_TODO_STATE": 
            const temp = [...state.toDoList];
            temp[action.payload.index].completed = !temp[action.payload.index].completed;
            return {
                ...state,
                toDoList: temp
            }
        default: return state;
    }
}

export default reducer;
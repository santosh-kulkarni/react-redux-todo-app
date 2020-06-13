export const checkLength = (todo, status) => {
    return todo.some(item => item.completed === status);
}
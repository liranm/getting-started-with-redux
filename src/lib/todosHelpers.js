export const toggleTodo = todo => ({
    ...todo,
    completed: !todo.completed 
});
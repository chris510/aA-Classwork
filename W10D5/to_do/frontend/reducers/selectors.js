export const allTodos = (state) => {
  let todos = Object.keys(state.todos);
  let todo_ids = todos.map( todoIdx => state.todos[todoIdx] );
  return todo_ids;
}
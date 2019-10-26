export const fetchAllTodos = () => {
  return $.ajax({
    url: `/api/todos`,
    method: 'GET'
  })
  .then(
    todos => console.log(todos)
  );
};

export const createTodo = (todo) => {
  return $.ajax({
    url: `/api/todos`,
    method: `POST`,
    data: { todo }
  });
};

export const updateTodo = (todo) => {
  return $.ajax({
    url: `/api/todos/${todo.id}`,
    method: `PATCH`,
    data: { todo }
  }).then(
    todos => console.log(todos),
    error => console.log(error)
  );
};


export const deleteTodo = (todo) => {
  return $.ajax({
    url: `/api/todos/${todo.id}`,
    method: `DELETE`
  }).then(
    todos => console.log(todos),
    error => console.log(error)
  );
};



import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form'

// // {
//   todos, [ {}]
//   receiveTodo  
// }

const TodoList = ({todos, receiveTodo}) => {
  return (
    <div>
      <h2>All Todos</h2>
      <ul>
        {todos.map(todo => <TodoListItem todo={todo} key={todo.id} />)}
      </ul>

      <TodoForm receiveTodo= { receiveTodo } />

    </div>
  )
};

export default TodoList; 


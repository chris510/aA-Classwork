
import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import { receiveTodos, receiveTodo } from '../../actions/todo_actions'

const mapStateToProps = (state) => {
  return {
    todos: allTodos(state) // [{todoobj1}, {todoobj2}]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveTodo: (todo) => dispatch(receiveTodo(todo)) // passing down a function we can dispatch later on with our TodoForm
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
/*
import Banana from './todo_list_container';  

<Banana />
*/
import { getVisibleTodos } from '../../lib/todosHelpers';
import { TodosList } from './TodosList';
import { connect } from 'react-redux';
import { toggleTodo } from '../../actions';

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch) => ({
    onTodoClick: (id) => dispatch(toggleTodo(id))
});

export const VisibleTodosList = connect(mapStateToProps, mapDispatchToProps)(TodosList);
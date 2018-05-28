import TodoList from '../components/TodoList';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import { withRouter } from 'react-router-dom';

const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case 'active':
            return todos.filter(todo => !todo.completed);
        case 'completed':
            return todos.filter(todo => todo.completed);
        default:
            return todos;
    }
};

const mapStateToProps = (state, { match }) => ({
    todos: getVisibleTodos(state.todos, match.params.filter)
});

const mapDispatchToProps = (dispatch) => ({
    onTodoClick(id) {
        dispatch(toggleTodo(id));
    } 
});

const VisibleTodoList = withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList));

export default VisibleTodoList;
import { getVisibleTodos } from '../../lib/todosHelpers';
import { TodosList } from './TodosList';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch) => ({
    onTodoClick: (id) => {
        dispatch({
            type: 'TOGGLE_TODO',
            id
        });
    }
});

export const VisibleTodosList = connect(mapStateToProps, mapDispatchToProps)(TodosList);
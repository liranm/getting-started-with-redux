import TodoList from '../components/TodoList';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import { withRouter } from 'react-router-dom';
import { getVisibleTodos } from '../reducers';

const mapStateToProps = (state, { match }) => ({
    todos: getVisibleTodos(state, match.params.filter)
});

const VisibleTodoList = withRouter(connect(
    mapStateToProps, 
    { onTodoClick: toggleTodo }
)(TodoList));

export default VisibleTodoList;
import todos, * as fromTodos from './todos'

const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action);

      return nextState;
    }, {});
  };
};

export const getVisibleTodos = (state, filter) => 
  fromTodos.getVisibleTodos(state.todos, filter);

export default combineReducers({
  todos
});
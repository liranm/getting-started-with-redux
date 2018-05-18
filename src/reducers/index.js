import todos from './todos'
import visibilityFilter from './visibilityFilter';

const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action);

      return nextState;
    }, {});
  };
};

export default combineReducers({
  todos,
  visibilityFilter
});
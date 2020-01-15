import { combineReducers } from 'redux';
import { countReducer } from './count';
import { userReducer } from './user';
import { movieReducer } from './movieList';

const reducer = combineReducers({
  counter: countReducer,
  user: userReducer,
  movieData: movieReducer,
});

export default reducer;

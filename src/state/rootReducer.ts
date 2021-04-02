import { combineReducers } from 'redux';
import moviesReducer from './reducers/moviesReducer';
import movieReducer from './reducers/movieReducer';

const reducer = combineReducers({
  movies: moviesReducer,
  movie: movieReducer
});

export default reducer;

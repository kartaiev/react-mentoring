import { MoviesActionType } from '../actionTypes';
import { MoviesAction, MoviesState, MovieType } from '../interfaces';

export const moviesInitialState = {
  loading: false,
  error: null,
  data: {
    total: 0,
    offset: 0,
    limit: 0,
    totalAmount: 0,
    data: []
  }
};

const moviesReducer = (
  state: MoviesState = moviesInitialState,
  action: MoviesAction
): MoviesState => {
  switch (action.type) {
    case MoviesActionType.GET_MOVIES:
    case MoviesActionType.SEARCH_MOVIES:
    case MoviesActionType.FILTER_MOVIES:
    case MoviesActionType.SORT_MOVIES:
      return { loading: true, error: null, data: moviesInitialState.data };

    case MoviesActionType.GET_MOVIES_SUCCESS:
    case MoviesActionType.SEARCH_MOVIES_SUCCESS:
    case MoviesActionType.FILTER_MOVIES_SUCCESS:
    case MoviesActionType.SORT_MOVIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };

    case MoviesActionType.GET_MOVIES_ERROR:
    case MoviesActionType.SEARCH_MOVIES_ERROR:
    case MoviesActionType.FILTER_MOVIES_ERROR:
    case MoviesActionType.SORT_MOVIES_ERROR:
    case MoviesActionType.DELETE_MOVIE_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: moviesInitialState.data
      };

    case MoviesActionType.UPDATE_POSTER:
    case MoviesActionType.UPDATE_MOVIE:
    case MoviesActionType.UPDATE_POSTER_ERROR:
    case MoviesActionType.UPDATE_MOVIE_ERROR:
      return { ...state, loading: false, error: null };

    case MoviesActionType.UPDATE_POSTER_SUCCESS:
    case MoviesActionType.UPDATE_MOVIE_SUCCESS:
      return {
        loading: false,
        error: null,
        data: {
          ...state.data,
          data: state.data.data.map((movie: MovieType) =>
            movie.id === action.payload.id ? action.payload : movie
          )
        }
      };

    case MoviesActionType.DELETE_MOVIE:
    case MoviesActionType.ADD_MOVIE:
      return { ...state, loading: true, error: null };

    case MoviesActionType.DELETE_MOVIE_SUCCESS:
      return {
        loading: false,
        error: null,
        data: {
          ...state.data,
          data: state.data.data.filter(
            (movie: MovieType) => movie.id !== action.payload
          )
        }
      };

    case MoviesActionType.ADD_MOVIE_SUCCESS:
      return {
        loading: false,
        error: null,
        data: { ...state.data, data: [...state.data.data, action.payload] }
      };

    default:
      return state;
  }
};

export default moviesReducer;

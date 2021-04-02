import { MovieState, MovieAction } from '../interfaces';
import { MovieActionType } from '../actionTypes';

export const movieInitialState = {
  loading: false,
  error: null,
  data: {
    title: '',
    tagline: '',
    vote_average: 0,
    vote_count: 0,
    release_date: '',
    poster_path: '',
    overview: '',
    budget: 0,
    revenue: 0,
    runtime: 0,
    genres: [],
    id: 0
  }
};

const movieReducer = (
  state: MovieState = movieInitialState,
  action: MovieAction
): MovieState => {
  switch (action.type) {
    case MovieActionType.GET_MOVIE:
      return { loading: true, error: null, data: movieInitialState.data };

    case MovieActionType.GET_MOVIE_SUCCESS:
      return { loading: false, error: null, data: action.payload };

    case MovieActionType.GET_MOVIE_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: movieInitialState.data
      };

    default:
      return state;
  }
};

export default movieReducer;

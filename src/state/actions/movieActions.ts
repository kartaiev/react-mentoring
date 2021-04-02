import { MovieActionType } from '../actionTypes';
import { Dispatch } from 'redux';
import { MovieAction, MovieType } from '../interfaces';

export const getMovie = (movie: MovieType) => {
  return async (dispatch: Dispatch<MovieAction>): Promise<void> => {
    dispatch({
      type: MovieActionType.GET_MOVIE
    });
    try {
      dispatch({
        type: MovieActionType.GET_MOVIE_SUCCESS,
        payload: movie
      });
    } catch (e) {
      dispatch({
        type: MovieActionType.GET_MOVIE_ERROR,
        payload: e.message
      });
    }
  };
};

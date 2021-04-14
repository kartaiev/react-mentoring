import { MovieActionType } from '../actionTypes';
import { Dispatch } from 'redux';
import { MovieAction } from '../interfaces';
import axios from 'axios';
import { getSingleMovie } from '../../utils';

export const getMovie = (id: string) => {
  return async (dispatch: Dispatch<MovieAction>): Promise<void> => {
    dispatch({
      type: MovieActionType.GET_MOVIE
    });
    try {
      const { data } = await axios.request(getSingleMovie(id));

      dispatch({
        type: MovieActionType.GET_MOVIE_SUCCESS,
        payload: data
      });
    } catch (e) {
      dispatch({
        type: MovieActionType.GET_MOVIE_ERROR,
        payload: e.message
      });
    }
  };
};

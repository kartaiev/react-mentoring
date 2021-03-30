import { MovieType } from './common';
import { MovieActionType } from '../actionTypes';

export interface MovieState {
  loading: boolean;
  error: string | null;
  data: MovieType;
}

interface GetMovieAction {
  type: MovieActionType.GET_MOVIE;
}

interface GetMovieSuccessAction {
  type: MovieActionType.GET_MOVIE_SUCCESS;
  payload: MovieType;
}

interface GetMovieErrorAction {
  type: MovieActionType.GET_MOVIE_ERROR;
  payload: string;
}

export type MovieAction =
  | GetMovieAction
  | GetMovieSuccessAction
  | GetMovieErrorAction;

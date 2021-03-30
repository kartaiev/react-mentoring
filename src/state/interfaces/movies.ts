import { MoviesActionType } from '../actionTypes';
import { MoviesType, MovieType } from './common';

export interface MoviesState {
  loading: boolean;
  error: string | null;
  data: MoviesType;
}

interface GetMoviesAction {
  type: MoviesActionType.GET_MOVIES | MoviesActionType.SEARCH_MOVIES;
}

interface GetMoviesSuccessAction {
  type:
    | MoviesActionType.GET_MOVIES_SUCCESS
    | MoviesActionType.SEARCH_MOVIES_SUCCESS;
  payload: MoviesType;
}

interface GetMoviesErrorAction {
  type:
    | MoviesActionType.GET_MOVIES_ERROR
    | MoviesActionType.SEARCH_MOVIES_ERROR;
  payload: string;
}

interface UpdatePosterAction {
  type: MoviesActionType.UPDATE_POSTER;
}

interface UpdatePosterActionSuccess {
  type: MoviesActionType.UPDATE_POSTER_SUCCESS;
  payload: MovieType;
}

interface UpdatePosterActionError {
  type: MoviesActionType.UPDATE_POSTER_ERROR;
}

interface UpdateMovieAction {
  type: MoviesActionType.UPDATE_MOVIE;
}

interface UpdateMovieActionSuccess {
  type: MoviesActionType.UPDATE_MOVIE_SUCCESS;
  payload: MovieType;
}

interface UpdateMovieActionError {
  type: MoviesActionType.UPDATE_MOVIE_ERROR;
}

interface DeleteMovieAction {
  type: MoviesActionType.DELETE_MOVIE;
}

interface DeleteMovieActionSuccess {
  type: MoviesActionType.DELETE_MOVIE_SUCCESS;
  payload: number;
}

interface DeleteMovieActionError {
  type: MoviesActionType.DELETE_MOVIE_ERROR;
  payload: string;
}

interface AddMovieAction {
  type: MoviesActionType.ADD_MOVIE;
}

interface AddMovieActionSuccess {
  type: MoviesActionType.ADD_MOVIE_SUCCESS;
  payload: MovieType;
}

interface AddMovieActionError {
  type: MoviesActionType.ADD_MOVIE_ERROR;
  payload: string;
}

interface FilterMovieAction {
  type: MoviesActionType.FILTER_MOVIES;
}

interface FilterMovieSuccessAction {
  type: MoviesActionType.FILTER_MOVIES_SUCCESS;
  payload: MoviesType;
}

interface FilterMovieErrorAction {
  type: MoviesActionType.FILTER_MOVIES_ERROR;
  payload: string;
}

interface SortMovieAction {
  type: MoviesActionType.SORT_MOVIES;
}

interface SortMovieSuccessAction {
  type: MoviesActionType.SORT_MOVIES_SUCCESS;
  payload: MoviesType;
}

interface SortMovieErrorAction {
  type: MoviesActionType.SORT_MOVIES_ERROR;
  payload: string;
}

export type MoviesAction =
  | GetMoviesAction
  | GetMoviesSuccessAction
  | GetMoviesErrorAction
  | UpdatePosterAction
  | UpdatePosterActionSuccess
  | UpdatePosterActionError
  | UpdateMovieAction
  | UpdateMovieActionSuccess
  | UpdateMovieActionError
  | DeleteMovieAction
  | DeleteMovieActionSuccess
  | DeleteMovieActionError
  | AddMovieAction
  | AddMovieActionSuccess
  | AddMovieActionError
  | FilterMovieAction
  | FilterMovieSuccessAction
  | FilterMovieErrorAction
  | SortMovieAction
  | SortMovieSuccessAction
  | SortMovieErrorAction;

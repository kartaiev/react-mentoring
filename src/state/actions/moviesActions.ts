import { MoviesActionType } from '../actionTypes';
import {
  addSingleMovie,
  deleteSingleMovie,
  filterAllMovies,
  getAllMovies,
  getPoster,
  searchMoviesByTitle,
  sortAllMovies,
  updateSingleMovie
} from '../../utils';
import axios, { AxiosRequestConfig } from 'axios';
import { Dispatch } from 'redux';
import { MoviesAction, MovieType } from '../interfaces';

const {
  GET_MOVIES,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
  SEARCH_MOVIES,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_ERROR,
  DELETE_MOVIE,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_ERROR,
  UPDATE_POSTER,
  UPDATE_POSTER_SUCCESS,
  UPDATE_POSTER_ERROR,
  UPDATE_MOVIE,
  UPDATE_MOVIE_SUCCESS,
  UPDATE_MOVIE_ERROR,
  ADD_MOVIE,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_ERROR,
  FILTER_MOVIES,
  FILTER_MOVIES_SUCCESS,
  FILTER_MOVIES_ERROR,
  SORT_MOVIES,
  SORT_MOVIES_SUCCESS,
  SORT_MOVIES_ERROR
} = MoviesActionType;

const pending = (type: MoviesActionType) => ({
  type
});

const success = (type: MoviesActionType, payload: MovieType | number) => ({
  type,
  payload
});

const error = (type: MoviesActionType, payload: string) => ({
  type,
  payload
});

export const getMovies = (offset = 0, limit = 12) => {
  return async (dispatch: Dispatch<MoviesAction>): Promise<void> => {
    dispatch(<MoviesAction>pending(GET_MOVIES));
    try {
      const { data } = await axios.request(getAllMovies(offset, limit));
      dispatch(<MoviesAction>success(GET_MOVIES_SUCCESS, data));
    } catch (e) {
      dispatch(<MoviesAction>error(GET_MOVIES_ERROR, e.message));
    }
  };
};

export const searchMovies = (title: string) => {
  return async (dispatch: Dispatch<MoviesAction>): Promise<void> => {
    dispatch(<MoviesAction>pending(SEARCH_MOVIES));
    try {
      const { data } = await axios.request(searchMoviesByTitle(title));
      dispatch(<MoviesAction>success(SEARCH_MOVIES_SUCCESS, data));
    } catch (e) {
      dispatch(<MoviesAction>error(SEARCH_MOVIES_ERROR, e.message));
    }
  };
};

export const deleteMovie = (id: number) => {
  return async (dispatch: Dispatch<MoviesAction>): Promise<void> => {
    dispatch(<MoviesAction>pending(DELETE_MOVIE));
    try {
      await axios.request(deleteSingleMovie(id));
      dispatch(<MoviesAction>success(DELETE_MOVIE_SUCCESS, id));
    } catch (e) {
      dispatch(<MoviesAction>error(DELETE_MOVIE_ERROR, e.message));
    }
  };
};

export const updatePoster = (movie: MovieType) => {
  return async (dispatch: Dispatch<MoviesAction>): Promise<void> => {
    dispatch(<MoviesAction>pending(UPDATE_POSTER));
    try {
      const { data } = await axios.request(getPoster(movie.title));
      movie.poster_path = data.titles[0].image;
      await axios.request(<AxiosRequestConfig>updateSingleMovie(movie));
      dispatch(<MoviesAction>success(UPDATE_POSTER_SUCCESS, movie));
    } catch (e) {
      dispatch(<MoviesAction>error(UPDATE_POSTER_ERROR, e.message));
    }
  };
};

export const updateMovie = (movie: MovieType) => {
  return async (dispatch: Dispatch<MoviesAction>): Promise<void> => {
    dispatch(<MoviesAction>pending(UPDATE_MOVIE));
    try {
      await axios.request(<AxiosRequestConfig>updateSingleMovie(movie));
      dispatch(<MoviesAction>success(UPDATE_MOVIE_SUCCESS, movie));
    } catch (e) {
      dispatch(<MoviesAction>error(UPDATE_MOVIE_ERROR, e.message));
    }
  };
};

export const addMovie = (movie: MovieType) => {
  return async (dispatch: Dispatch<MoviesAction>): Promise<void> => {
    dispatch(dispatch(<MoviesAction>pending(ADD_MOVIE)));
    try {
      await axios.request(<AxiosRequestConfig>addSingleMovie(movie));
      dispatch(<MoviesAction>success(ADD_MOVIE_SUCCESS, movie));
    } catch (e) {
      dispatch(<MoviesAction>error(ADD_MOVIE_ERROR, e.message));
    }
  };
};

export const filterMovies = (genre: string) => {
  return async (dispatch: Dispatch<MoviesAction>): Promise<void> => {
    dispatch(<MoviesAction>pending(FILTER_MOVIES));
    try {
      const { data } = await axios.request(filterAllMovies(genre));
      dispatch(<MoviesAction>success(FILTER_MOVIES_SUCCESS, data));
    } catch (e) {
      dispatch(<MoviesAction>error(FILTER_MOVIES_ERROR, e.message));
    }
  };
};

export const sortMovies = (sortBy: string) => {
  return async (dispatch: Dispatch<MoviesAction>): Promise<void> => {
    dispatch(<MoviesAction>pending(SORT_MOVIES));
    try {
      const { data } = await axios.request(sortAllMovies(sortBy));
      dispatch(<MoviesAction>success(SORT_MOVIES_SUCCESS, data));
    } catch (e) {
      dispatch(<MoviesAction>error(SORT_MOVIES_ERROR, e.message));
    }
  };
};

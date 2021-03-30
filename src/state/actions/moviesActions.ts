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

export const getMovies = (offset = 0, limit = 12) => {
  return async (dispatch: Dispatch<MoviesAction>): Promise<void> => {
    dispatch({
      type: MoviesActionType.GET_MOVIES
    });
    try {
      const { data } = await axios.request(getAllMovies(offset, limit));
      dispatch({
        type: MoviesActionType.GET_MOVIES_SUCCESS,
        payload: data
      });
    } catch (e) {
      dispatch({
        type: MoviesActionType.GET_MOVIES_ERROR,
        payload: e.message
      });
    }
  };
};

export const searchMovies = (title: string) => {
  return async (dispatch: Dispatch<MoviesAction>): Promise<void> => {
    dispatch({
      type: MoviesActionType.SEARCH_MOVIES
    });
    try {
      const { data } = await axios.request(searchMoviesByTitle(title));
      dispatch({
        type: MoviesActionType.SEARCH_MOVIES_SUCCESS,
        payload: data
      });
    } catch (e) {
      dispatch({
        type: MoviesActionType.SEARCH_MOVIES_ERROR,
        payload: e.message
      });
    }
  };
};

export const deleteMovie = (id: number) => {
  return async (dispatch: Dispatch<MoviesAction>): Promise<void> => {
    dispatch({
      type: MoviesActionType.DELETE_MOVIE
    });
    try {
      await axios.request(deleteSingleMovie(id));
      dispatch({
        type: MoviesActionType.DELETE_MOVIE_SUCCESS,
        payload: id
      });
    } catch (e) {
      dispatch({
        type: MoviesActionType.DELETE_MOVIE_ERROR,
        payload: e.message
      });
    }
  };
};

export const updatePoster = (movie: MovieType) => {
  return async (dispatch: Dispatch<MoviesAction>): Promise<void> => {
    dispatch({
      type: MoviesActionType.UPDATE_POSTER
    });
    try {
      const { data } = await axios.request(getPoster(movie.title));
      movie.poster_path = data.titles[0].image;
      await axios.request(<AxiosRequestConfig>updateSingleMovie(movie));
      dispatch({
        type: MoviesActionType.UPDATE_POSTER_SUCCESS,
        payload: movie
      });
    } catch (e) {
      dispatch({
        type: MoviesActionType.UPDATE_POSTER_ERROR,
        payload: e.message
      });
    }
  };
};

export const updateMovie = (movie: MovieType) => {
  return async (dispatch: Dispatch<MoviesAction>): Promise<void> => {
    dispatch({
      type: MoviesActionType.UPDATE_MOVIE
    });
    try {
      await axios.request(<AxiosRequestConfig>updateSingleMovie(movie));
      dispatch({
        type: MoviesActionType.UPDATE_MOVIE_SUCCESS,
        payload: movie
      });
    } catch (e) {
      dispatch({
        type: MoviesActionType.UPDATE_MOVIE_ERROR,
        payload: e.message
      });
    }
  };
};

export const addMovie = (movie: MovieType) => {
  return async (dispatch: Dispatch<MoviesAction>): Promise<void> => {
    dispatch({
      type: MoviesActionType.ADD_MOVIE
    });
    try {
      await axios.request(<AxiosRequestConfig>addSingleMovie(movie));
      dispatch({
        type: MoviesActionType.ADD_MOVIE_SUCCESS,
        payload: movie
      });
    } catch (e) {
      dispatch({
        type: MoviesActionType.ADD_MOVIE_ERROR,
        payload: e.message
      });
    }
  };
};

export const filterMovies = (genre: string) => {
  return async (dispatch: Dispatch<MoviesAction>): Promise<void> => {
    dispatch({
      type: MoviesActionType.FILTER_MOVIES
    });
    try {
      const { data } = await axios.request(filterAllMovies(genre));
      dispatch({
        type: MoviesActionType.FILTER_MOVIES_SUCCESS,
        payload: data
      });
    } catch (e) {
      dispatch({
        type: MoviesActionType.FILTER_MOVIES_ERROR,
        payload: e.message
      });
    }
  };
};

export const sortMovies = (sortBy: string) => {
  return async (dispatch: Dispatch<MoviesAction>): Promise<void> => {
    dispatch({
      type: MoviesActionType.SORT_MOVIES
    });
    try {
      const { data } = await axios.request(sortAllMovies(sortBy));
      dispatch({
        type: MoviesActionType.SORT_MOVIES_SUCCESS,
        payload: data
      });
    } catch (e) {
      dispatch({
        type: MoviesActionType.SORT_MOVIES_ERROR,
        payload: e.message
      });
    }
  };
};

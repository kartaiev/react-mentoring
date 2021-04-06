import { MovieType } from '../../state/interfaces';

export const getInitialFields = (
  whatModal: string,
  movie: MovieType
): MovieType => {
  return whatModal === 'add'
    ? {
        title: '',
        tagline: '',
        vote_average: 0,
        vote_count: 0,
        poster_path: '',
        overview: '',
        release_date: '',
        budget: 0,
        revenue: 0,
        runtime: 0,
        genres: []
      }
    : {
        title: movie.title,
        tagline: movie.tagline,
        vote_average: movie.vote_average,
        vote_count: movie.vote_count,
        poster_path: movie.poster_path,
        overview: movie.overview,
        release_date: movie.release_date,
        budget: movie.budget,
        revenue: movie.revenue,
        runtime: movie.runtime,
        genres: movie.genres,
        id: movie.id
      };
};

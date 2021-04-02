export enum ADD_EDIT_MOVIE {
  ADD_MOVIE_TITLE = 'ADD MOVIE',
  EDIT_MOVIE_TITLE = 'EDIT MOVIE',
  ID = 'MOVIE ID',
  TITLE = 'TITLE',
  DATE = 'RELEASE DATE',
  URL = 'MOVIE URL',
  GENRE = 'GENRE',
  OVERVIEW = 'OVERVIEW',
  TIME = 'RUNTIME',
  TITLE_PLACEHOLDER = 'Title',
  DATE_PLACEHOLDER = 'Select Date',
  URL_PLACEHOLDER = 'Movie URL here',
  GENRE_PLACEHOLDER = 'Select Genre',
  OVERVIEW_PLACEHOLDER = 'Overview here',
  TIME_PLACEHOLDER = 'Runtime here'
}

export const addEditMovieStrings = [
  { name: 'TITLE', placeholder: 'Title', value: 'title' },
  { name: 'TAGLINE', placeholder: 'Tagline here', value: 'tagline' },
  { name: 'MOVIE URL', placeholder: 'Movie URL here', value: 'poster_path' },
  { name: 'OVERVIEW', placeholder: 'Overview here', value: 'overview' }
];

export const addEditMovieNumbers = [
  { name: 'RUNTIME', placeholder: 'Runtime here', value: 'runtime' },
  { name: 'AVERAGE VOTE', placeholder: 'Average vote', value: 'vote_average' },
  { name: 'VOTE COUNT', placeholder: 'Vote count', value: 'vote_count' },
  { name: 'BUDGET', placeholder: 'Budget here', value: 'budget' },
  { name: 'REVENUE', placeholder: 'Revenue here', value: 'revenue' }
];

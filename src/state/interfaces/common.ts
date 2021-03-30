export type MoviesType = {
  data: MovieType[];
  total: number;
  offset: number;
  limit: number;
  totalAmount: number;
};

export type MovieType = {
  [key: string]: number | string | undefined | string[];
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  runtime: number;
  genres: string[];
  id?: number;
};

export type Form = {
  [key: string]: number | string | undefined | string[];
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  runtime: number;
  genres: string[];
};

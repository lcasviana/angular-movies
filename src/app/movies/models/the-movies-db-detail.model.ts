export interface TheMoviesDbDetailGenreModel {
  id: number;
  name: string;
}

export interface TheMoviesDbDetailProductionCompanyModel {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface TheMoviesDbDetailProductionCountryModel {
  iso_3166_1: string;
  name: string;
}

export interface TheMoviesDbDetailSpokenLanguageModel {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface TheMoviesDbDetailModel {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: any;
  budget: number;
  genres: TheMoviesDbDetailGenreModel[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: TheMoviesDbDetailProductionCompanyModel[];
  production_countries: TheMoviesDbDetailProductionCountryModel[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: TheMoviesDbDetailSpokenLanguageModel[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

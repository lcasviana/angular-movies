import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MovieModel } from '../models/movie.model';
import { TheMoviesDbResultModel } from '../models/the-movies-db.model';
import { MoviesRepository } from './movies-repository.service';

@Injectable()
export class MoviesState {
  private readonly _movies: BehaviorSubject<MovieModel[]> = new BehaviorSubject<MovieModel[]>([]);

  public readonly movies$: Observable<MovieModel[]> = this._movies.asObservable();

  private get movies(): MovieModel[] {
    return this._movies.getValue();
  }

  private set movies(movies: MovieModel[]) {
    this._movies.next(movies);
  }

  public constructor(private moviesRepository: MoviesRepository) {
    this.moviesRepository.getPopulars()
      .subscribe((result) => this.movies = result.results.map(this.toMovieModel));
  }

  private toMovieModel(theMoviesDbModel: TheMoviesDbResultModel): MovieModel {
    return {
      id: theMoviesDbModel.id,
      description: theMoviesDbModel.overview,
      imageUrl: `http://image.tmdb.org/t/p/w500${theMoviesDbModel.poster_path}`,
      releaseDate: theMoviesDbModel.release_date,
      title: theMoviesDbModel.title,
      votes: theMoviesDbModel.vote_average,
    };
  }
}
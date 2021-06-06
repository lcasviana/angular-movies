import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MovieModel } from '../../models/movie.model';
import { TheMoviesDbDetailModel } from '../../models/the-movies-db-detail.model';
import { MoviesRepository } from '../../services/movies-repository.service';

@Component({
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.scss'],
})
export class MoviesDetailComponent implements OnInit, OnDestroy {
  private readonly destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  public movie: MovieModel | null = null;

  constructor(private activatedRoute: ActivatedRoute, private moviesRepository: MoviesRepository) { }

  ngOnInit() {
    this.activatedRoute.params
      .pipe(takeUntil(this.destroyed$))
      .subscribe((params: Params) => {
        const id = +params['id'];
        this.moviesRepository.getById(id)
          .pipe(takeUntil(this.destroyed$))
          .subscribe((movie: TheMoviesDbDetailModel) => this.movie = {
            id: movie.id,
            description: movie.overview,
            imageUrl: `http://image.tmdb.org/t/p/w500${movie.poster_path}`,
            releaseDate: movie.release_date,
            title: movie.title,
            votes: movie.vote_average,
          });
      });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
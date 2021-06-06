import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MovieModel } from '../../models/movie.model';
import { MoviesState } from '../../services/movies-state.service';

@Component({
  templateUrl: './movies-popular.component.html',
  styleUrls: ['./movies-popular.component.scss'],
})
export class MoviesPopularComponent implements OnInit, OnDestroy {
  private readonly destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  private allMovies: MovieModel[] = [];
  private sortBy: string | null = null;

  public search: FormControl = new FormControl('');
  public movies: MovieModel[] = [];

  constructor(public state: MoviesState) { }

  ngOnInit() {
    this.state.movies$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((value: MovieModel[]) => {
        this.allMovies = value;
        this.movies = value;
      });
    this.search.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe((value: string) => this.manageMoviesList(value.trim(), undefined));
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  public setSortBy(sortBy: string | null): void {
    this.sortBy = sortBy;
    this.manageMoviesList(null, sortBy);
  }

  private manageMoviesList(search: string | null, sortBy: string | null | undefined): void {
    this.movies = [...this.allMovies];
    const _search = search === null ? this.search.value : search;
    const _sortBy = sortBy === undefined ? this.sortBy : sortBy;
    this.sortBy = _sortBy;
    this.filterMovies(_search);
    this.sortMovies(_sortBy);
  }

  private filterMovies(search: string): void {
    if (search && this.search.dirty)
      this.movies = this.movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()));
  }

  private sortMovies(sortBy: string | null): void {
    this.movies.sort((a: MovieModel, b: MovieModel) => {
      switch (sortBy) {
        case 'title':
          if (a.title > b.title) return +1;
          if (a.title < b.title) return -1;
          return 0;
        case 'votes':
          if (a.votes > b.votes) return -1;
          if (a.votes < b.votes) return +1;
          return 0;
        default:
          return 0;
      }
    });
  }
}
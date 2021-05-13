import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ReplaySubject } from "rxjs";
import { takeUntil } from 'rxjs/operators';
import { TheMoviesDbModel, TheMoviesDbResultModel } from "../models/the-movies-db.model";
import { MoviesService } from "../services/movies.service";

@Component({
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"],
})
export class MoviesComponent implements OnInit, OnDestroy {
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  private result!: TheMoviesDbModel;

  search: FormControl = new FormControl('');
  movies!: TheMoviesDbResultModel[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getPopulars()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((result: TheMoviesDbModel) => {
        this.result = result;
        this.movies = result?.results;
      });

    this.search.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe((value: string) => this.filterMovies(value.trim()));
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  private filterMovies(search: string) {
    const allMovies = this.result?.results;
    if (!search) this.movies = allMovies;
    else if (search && this.search.dirty)
      this.movies = allMovies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()));
  }
}

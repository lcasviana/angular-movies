import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ReplaySubject } from "rxjs";
import { takeUntil } from 'rxjs/operators';
import { TheMoviesDbModel } from "../models/the-movies-db.model";
import { MoviesService } from "../services/movies.service";

@Component({
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"],
})
export class MoviesComponent implements OnInit, OnDestroy {
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  search: FormControl = new FormControl('');
  movies!: TheMoviesDbModel;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getPopulars()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(movies => this.movies = movies);

    // this.search.valueChanges
    //   .pipe(takeUntil(this.destroyed$))
    //   .subscribe((value: string) => this.filterMovies(value.trim()));
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  // private filterMovies(search: string) {
  //   if (!search) this.movies = [];
  //   else if (search && this.search.dirty)
  //     this.movies = [].filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()));
  // }
}

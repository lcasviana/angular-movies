import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ReplaySubject } from "rxjs";
import { takeUntil } from 'rxjs/operators';
import { Movie } from "./models/movie.model";
import { allMovies } from "./util/movies.util";

@Component({
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"],
})
export class MoviesComponent implements OnInit, OnDestroy {
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  search: FormControl = new FormControl('');
  movies: Movie[] = allMovies;

  private filterMovies(search: string) {
    if (!search) this.movies = allMovies;
    else if (search && this.search.dirty)
      this.movies = allMovies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()));
  }

  ngOnInit() {
    this.search.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe((value: string) => this.filterMovies(value.trim()));
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}

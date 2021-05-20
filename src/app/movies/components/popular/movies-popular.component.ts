import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ReplaySubject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { MoviesState } from "../../services/movies-state.service";

@Component({
  templateUrl: './movies-popular.component.html',
  styleUrls: ['./movies-popular.component.scss'],
})
export class MoviesPopularComponent implements OnInit, OnDestroy {
  private readonly destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  search: FormControl = new FormControl('');

  constructor(public state: MoviesState) { }

  ngOnInit() {
    this.search.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe((value: string) => this.filterMovies(value.trim()));
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  private filterMovies(search: string) {
    // const allMovies = this.result?.results;
    // if (!search) this.movies = allMovies;
    // else if (search && this.search.dirty)
    //   this.movies = allMovies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()));
  }
}
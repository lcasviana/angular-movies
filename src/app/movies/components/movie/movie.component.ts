import { Component, Input } from "@angular/core";
import { TheMoviesDbResultModel } from "../../models/the-movies-db.model";

@Component({
  selector: "movie",
  templateUrl: "./movie.component.html",
})
export class MovieComponent {
  @Input() movie!: TheMoviesDbResultModel;
}

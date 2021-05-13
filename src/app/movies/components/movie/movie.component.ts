import { Component, Input } from "@angular/core";
import { TheMoviesDbResultModel } from "../../models/the-movies-db.model";

@Component({
  selector: "movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"],
})
export class MovieComponent {
  @Input() movie!: TheMoviesDbResultModel;
}

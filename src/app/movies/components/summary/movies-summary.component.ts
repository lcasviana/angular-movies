import { Component, Input } from '@angular/core';
import { MovieModel } from '../../models/movie.model';

@Component({
  selector: 'movies-summary',
  templateUrl: './movies-summary.component.html',
  styleUrls: ['./movies-summary.component.scss'],
})
export class MovieComponent {
  @Input() movie!: MovieModel;
}

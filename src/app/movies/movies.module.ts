import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies.component';
import { MovieComponent } from './components/summary/movies-summary.component';
import { SharedModule } from '../shared/shared.module';
import { MoviesRepository } from './services/movies-repository.service';
import { MoviesState } from './services/movies-state.service';
import { MoviesPageComponent } from './components/page/movies-page.component';

const routes = [
  { path: '', pathMatch: 'full', component: MoviesPageComponent },
  { path: ':id', pathMatch: 'full', component: MoviesComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
class MoviesRoutingModule { }

@NgModule({
  bootstrap: [MoviesComponent],
  declarations: [MoviesComponent, MoviesPageComponent, MovieComponent],
  imports: [CommonModule, MoviesRoutingModule, SharedModule],
  providers: [MoviesRepository, MoviesState],
})
export class MoviesModule { }

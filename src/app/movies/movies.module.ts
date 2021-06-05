import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies.component';
import { MoviesSummaryComponent } from './components/summary/movies-summary.component';
import { SharedModule } from '../shared/shared.module';
import { MoviesRepository } from './services/movies-repository.service';
import { MoviesState } from './services/movies-state.service';
import { MoviesPopularComponent } from './components/popular/movies-popular.component';
import { MoviesDetailComponent } from './components/detail/movies-detail.component';

const routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MoviesComponent,
    children: [
      { path: '', pathMatch: 'full', component: MoviesPopularComponent },
      { path: '/:id', component: MoviesDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
class MoviesRoutingModule { }

@NgModule({
  declarations: [
    MoviesComponent,
    MoviesPopularComponent,
    MoviesDetailComponent,
    MoviesSummaryComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MoviesRoutingModule,
  ],
  providers: [
    MoviesRepository,
    MoviesState,
  ],
})
export class MoviesModule { }

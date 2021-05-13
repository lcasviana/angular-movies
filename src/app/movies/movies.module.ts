import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MoviesComponent } from "./components/movies.component";
import { MovieComponent } from "./components/movie/movie.component";
import { SharedModule } from "../shared/shared.module";
import { MoviesService } from "./services/movies.service";

const routes = [
  {
    path: "",
    pathMatch: "full",
    component: MoviesComponent
  },
  {
    path: "**",
    redirectTo: "",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
class MoviesRoutingModule { }

@NgModule({
  declarations: [MoviesComponent, MovieComponent],
  imports: [CommonModule, MoviesRoutingModule, SharedModule],
  providers: [MoviesService],
})
export class MoviesModule { }

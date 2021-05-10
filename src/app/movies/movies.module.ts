import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MoviesComponent } from "./movies.component";
import { MovieComponent } from "./components/movie/movie.component";
import { MaterialModule } from "../shared/material.module";

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
  imports: [CommonModule, MoviesRoutingModule, MaterialModule],
})
export class MoviesModule { }

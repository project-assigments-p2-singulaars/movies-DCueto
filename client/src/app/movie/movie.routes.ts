import { Route } from "@angular/router";
import { MovieComponent } from "./movie.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { MovieDetailComponent } from "./pages/movie-detail/movie-detail.component";

export const MOVIE_ROUTES: Route[] = [
  { path: '', component: MovieComponent,
    children: [
      { path: 'movies', component: MovieListComponent },
      { path: 'detail:id', component: MovieDetailComponent }
    ]
  }
]
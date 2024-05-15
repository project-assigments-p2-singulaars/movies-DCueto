import { Route } from "@angular/router";
import { MovieComponent } from "./movie.component";
import { MovieListComponent } from "./components/movie-list/movie-list.component";
import { MovieDetailPageComponent } from "./pages/movie-detail-page/movie-detail-page.component";

export const MOVIE_ROUTES: Route[] = [
  { path: '', component: MovieComponent,
    children: [
      // { path: 'movies', component: MovieListComponent },
      { path: 'detail/:id', component: MovieDetailPageComponent }
    ]
  }
]
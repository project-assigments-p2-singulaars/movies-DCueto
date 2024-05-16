import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', redirectTo: '' },
      { path: 'movie', loadChildren: () =>
          import('./movie/movie.routes').then( (mod) => {
            return mod.MOVIE_ROUTES;
          })
      }
    ]
  }
];
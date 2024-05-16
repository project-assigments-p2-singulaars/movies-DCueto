import { Component, effect, inject } from '@angular/core';
import { MovieRoomSelectorComponent } from './movie-room-selector/movie-room-selector.component';
import { MovieCarrouselItemComponent } from '../movie-carrousel/movie-carrousel-item/movie-carrousel-item.component';
import { Observable } from 'rxjs';
import { Movie } from '../../../shared/interfaces/movie';
import { MovieService } from '../../services/movie.service';
import { AsyncPipe } from '@angular/common';
import { MovieRoomItemComponent } from './movie-room-item/movie-room-item.component';

@Component({
  selector: 'mv-movie-room',
  standalone: true,
  imports: [MovieRoomSelectorComponent, MovieRoomItemComponent, AsyncPipe],
  templateUrl: './movie-room.component.html',
  styleUrl: './movie-room.component.scss'
})
export class MovieRoomComponent {
  movieOnRoom!: Observable<Movie>;
  movie!: Movie;
  movieService = inject( MovieService );

  constructor( ){
    effect( () => {
      console.log( this.movieService.roomSelected() );
      this.getMovie();
    } );

  }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie( ){
    this.movieService.getMovieOnRoom( this.movieService.roomSelected() )
      .subscribe( ( resp ) => {
        this.movie = resp;
      });
  }
}

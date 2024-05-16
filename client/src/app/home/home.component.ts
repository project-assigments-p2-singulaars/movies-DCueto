import { Component, inject, OnInit } from '@angular/core';
import { MovieHeroComponent } from '../movie/components/movie-hero/movie-hero.component';
import { MovieCarrouselComponent } from '../movie/components/movie-carrousel/movie-carrousel.component';
import { MovieService } from '../movie/services/movie.service';
import { Movie } from '../shared/interfaces/movie';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MovieRoomComponent } from '../movie/components/movie-room/movie-room.component';

@Component({
  selector: 'mv-home',
  standalone: true,
  imports: [MovieHeroComponent, MovieCarrouselComponent, MovieRoomComponent, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  movieHero!: Movie;
  movieService = inject( MovieService );

  ngOnInit(): void {
    this.movieService.getHeroMovie().subscribe( observable => {
      console.log( observable, 'hero movie' );
      this.movieHero = observable[0];
    });
  }

}

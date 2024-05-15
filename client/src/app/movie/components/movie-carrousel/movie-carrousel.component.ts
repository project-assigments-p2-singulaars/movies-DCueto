import { Component, inject, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../../shared/interfaces/movie';
import { MovieService } from '../../services/movie.service';
import { AsyncPipe } from '@angular/common';
import { MovieCarrouselItemComponent } from './movie-carrousel-item/movie-carrousel-item.component';

@Component({
  selector: 'mv-movie-carrousel',
  standalone: true,
  imports: [AsyncPipe, MovieCarrouselItemComponent],
  templateUrl: './movie-carrousel.component.html',
  styleUrl: './movie-carrousel.component.scss'
})
export class MovieCarrouselComponent implements OnInit{

  movieList!: Observable<Movie[]>
  @Input() title: string = 'Movies';

  movieService = inject( MovieService );

  ngOnInit(): void {
    this.movieList = this.movieService.getAllMovies();
  }
}

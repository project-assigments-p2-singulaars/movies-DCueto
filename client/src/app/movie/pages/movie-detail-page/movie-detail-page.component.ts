import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { MovieDetailsComponent } from '../../components/movie-details/movie-details.component';
import { Movie } from '../../../shared/interfaces/movie';
import { MovieService } from '../../services/movie.service';
import { BackButtonComponent } from '../../../shared/components/back-button/back-button.component';

@Component({
  selector: 'mv-movie-detail-page',
  standalone: true,
  imports: [MovieDetailsComponent, BackButtonComponent],
  templateUrl: './movie-detail-page.component.html',
  styleUrl: './movie-detail-page.component.scss'
})
export class MovieDetailPageComponent implements OnInit {
  @Input({ transform: numberAttribute }) id = 0;
  movie!: Movie;
  movieService = inject( MovieService );

  ngOnInit(): void {

    this.id && this.movieService.getMovieById( this.id ).subscribe( obs => {
      this.movie = obs;
      console.log( this.movie );
    });

  }

}

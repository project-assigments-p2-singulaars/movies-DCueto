import { Component, inject, Input, OnInit } from '@angular/core';
import { MovieButtonComponent } from '../movie-button/movie-button.component';
import { Movie } from '../../../shared/interfaces/movie';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'mv-movie-hero',
  standalone: true,
  imports: [MovieButtonComponent, RouterLink],
  templateUrl: './movie-hero.component.html',
  styleUrl: './movie-hero.component.scss'
})
export class MovieHeroComponent implements OnInit {
  @Input() movie!: Movie | null;
  pathToDetail = '/movie/detail/';

  ngOnInit(): void {
    console.log( this.pathToDetail );
  }
}

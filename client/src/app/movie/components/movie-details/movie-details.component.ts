import { Component, Input } from '@angular/core';
import { Movie } from '../../../shared/interfaces/movie';
import { MovieButtonComponent } from '../movie-button/movie-button.component';
import { BackButtonComponent } from '../../../shared/components/back-button/back-button.component';

@Component({
  selector: 'mv-movie-details',
  standalone: true,
  imports: [MovieButtonComponent, BackButtonComponent],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent {
  @Input() movie!: Movie | null;

}

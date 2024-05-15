import { Component, Input } from '@angular/core';
import { Movie } from '../../../../shared/interfaces/movie';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'mv-movie-carrousel-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movie-carrousel-item.component.html',
  styleUrl: './movie-carrousel-item.component.scss'
})
export class MovieCarrouselItemComponent {
  @Input() movie!: Movie | null;
}

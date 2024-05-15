import { Component, Input } from '@angular/core';
import { Movie } from '../../../../shared/interfaces/movie';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'mv-movie-room-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movie-room-item.component.html',
  styleUrl: './movie-room-item.component.scss'
})
export class MovieRoomItemComponent {
  @Input() movie!: Movie | null;
}

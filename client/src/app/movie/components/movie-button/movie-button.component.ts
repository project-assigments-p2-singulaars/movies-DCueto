import { Component, Input, numberAttribute } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'mv-movie-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movie-button.component.html',
  styleUrl: './movie-button.component.scss'
})
export class MovieButtonComponent {
  title = 'Book Film';
  icon = 'fa-solid fa-circle-play';
  @Input() path: string = '';
  @Input({ transform: numberAttribute }) id: number = 0;
}

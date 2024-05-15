import { Component, inject, Input } from '@angular/core';
import { Room } from '../../../../shared/interfaces/room';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'mv-movie-room-selector-tab',
  standalone: true,
  imports: [],
  templateUrl: './movie-room-selector-tab.component.html',
  styleUrl: './movie-room-selector-tab.component.scss'
})
export class MovieRoomSelectorTabComponent {
  @Input() room!: Room;
  movieService = inject( MovieService );
  selectedRoom = this.movieService.roomSelected;

  handleTabClick( event: MouseEvent ){
    this.movieService.roomSelected.set( Number( this.room.id ) );
    console.log( event );
  }
}

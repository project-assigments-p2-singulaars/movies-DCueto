import { Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { AsyncPipe } from '@angular/common';
import { MovieRoomSelectorTabComponent } from '../movie-room-selector-tab/movie-room-selector-tab.component';

@Component({
  selector: 'mv-movie-room-selector',
  standalone: true,
  imports: [AsyncPipe, MovieRoomSelectorTabComponent],
  templateUrl: './movie-room-selector.component.html',
  styleUrl: './movie-room-selector.component.scss'
})
export class MovieRoomSelectorComponent implements OnInit{

  movieService = inject( MovieService );
  rooms = this.movieService.getAllRooms();
  selectedRoom = this.movieService.roomSelected;

  ngOnInit(): void {

    const scrollContainer = document.querySelector('.room-selector__container') as HTMLElement;
    const leftGradient =  document.querySelector('.gradients__left') as HTMLElement;
    const rightGradient =  document.querySelector('.gradients__right') as HTMLElement;

    if( scrollContainer.scrollLeft == 0 ){
      leftGradient.classList.add('hidden');
    }

    scrollContainer.addEventListener('scroll', ( e: any ) => {
      if( e.target.scrollLeft == 0 ){
        leftGradient.classList.add('hidden');
      } else if( e.target.scrollLeft > 0 && leftGradient.classList.contains('hidden')){
        leftGradient.classList.remove('hidden');
      }

      if( e.target.scrollLeft >= e.target.offsetWidth ){
        rightGradient.classList.add('hidden');
      } else if( e.target.scrollLeft < e.target.offsetWidth && rightGradient.classList.contains('hidden') ){
        rightGradient.classList.remove('hidden');
      }
    });
  }

}

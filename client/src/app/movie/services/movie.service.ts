import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../../shared/interfaces/movie';
import { Observable, switchMap, tap } from 'rxjs';
import { Room } from '../../shared/interfaces/room';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  // Init number ( default value ) must be a constant defined on a constants manager
  roomSelected = signal<number>(1);

  private http = inject( HttpClient )

  getAllMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>('http://localhost:3000/movies');
  }

  getMovieById( id: number ): Observable<Movie>{
    return this.http.get<Movie>(`http://localhost:3000/movies/${id}`);
  }

  getHeroMovie(): Observable<Movie[]>{
    return this.http.get<Movie[]>('http://localhost:3000/movies?hero=true');
  }

  getRoomById( roomId: number ): Observable<Room>{
    return this.http.get<Room>(`http://localhost:3000/rooms/${roomId}`);
  }

  getMovieOnRoom( roomId: number ): Observable<any>{

    return this.getRoomById( roomId )
      .pipe( switchMap( ( res ) => {
        let movieId = res.filmId;
        console.log( 'from pipe on getRoomById: ', res )
        return this.getMovieById( movieId );
      })
    );

  }

  getAllRooms(): Observable<Room[]>{
    return this.http.get<Room[]>('http://localhost:3000/rooms');
  }


}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieRoomItemComponent } from './movie-room-item.component';

describe('MovieRoomItemComponent', () => {
  let component: MovieRoomItemComponent;
  let fixture: ComponentFixture<MovieRoomItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieRoomItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieRoomItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

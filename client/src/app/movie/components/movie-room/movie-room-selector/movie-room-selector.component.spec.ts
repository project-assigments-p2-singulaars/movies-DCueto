import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieRoomSelectorComponent } from './movie-room-selector.component';

describe('MovieRoomSelectorComponent', () => {
  let component: MovieRoomSelectorComponent;
  let fixture: ComponentFixture<MovieRoomSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieRoomSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieRoomSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

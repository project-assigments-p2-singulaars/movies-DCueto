import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieRoomSelectorTabComponent } from './movie-room-selector-tab.component';

describe('MovieRoomSelectorTabComponent', () => {
  let component: MovieRoomSelectorTabComponent;
  let fixture: ComponentFixture<MovieRoomSelectorTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieRoomSelectorTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieRoomSelectorTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

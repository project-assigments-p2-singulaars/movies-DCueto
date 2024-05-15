import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCarrouselItemComponent } from './movie-carrousel-item.component';

describe('MovieCarrouselItemComponent', () => {
  let component: MovieCarrouselItemComponent;
  let fixture: ComponentFixture<MovieCarrouselItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCarrouselItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieCarrouselItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

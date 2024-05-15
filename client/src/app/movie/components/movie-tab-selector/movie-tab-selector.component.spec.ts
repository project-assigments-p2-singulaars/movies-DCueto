import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTabSelectorComponent } from './movie-tab-selector.component';

describe('MovieTabSelectorComponent', () => {
  let component: MovieTabSelectorComponent;
  let fixture: ComponentFixture<MovieTabSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieTabSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieTabSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieModalComponent } from './movie-modal.component';
import { Movie } from '@core/models/movie';

describe('MovieModalComponent', () => {
  let component: MovieModalComponent;
  let fixture: ComponentFixture<MovieModalComponent>;
  let store = {};
  const movie: Movie = {
    id: 1,
    title: 'Star Wars: Return of the Jedi',
    adult: false,
    backdrop_path: '',
    genre_ids: [1],
    original_language: '',
    original_title: '',
    overview: 'resumo',
    popularity: 0,
    poster_path: '/p1LbrdJ53dGfEhRopG71akfzOVu.jpg',
    release_date: '',
    video: false,
    vote_average: 0,
    vote_count: 0
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieModalComponent);
    component = fixture.componentInstance;
    component.item = movie;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingComponent } from './ranking.component';
import { of } from 'rxjs';
import { MovieService } from '@shared/services/movies/movie.service';
import { Router, provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';

describe('RankingComponent', () => {
  let component: RankingComponent;
  let fixture: ComponentFixture<RankingComponent>;
  let movieService: MovieService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RankingComponent],
      providers: [
        { provide: MovieService, useValue: { 
          getTopRatedMovies: () => of({ page: 0, results: [], total_pages: 0, total_results: 0 }),
          getGenres: () => of({  genres: [] }),
          getConfiguration: () => of({ images: { base_url: '' } })
        } },
        provideRouter([
          {path: 'ranking', component: RankingComponent}
        ]),
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RankingComponent);
    movieService = TestBed.inject(MovieService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should initialize genreList and currentPage', () => {
    expect(component.genreList).toEqual({ genres: [] });
    expect(component.currentPage).toEqual(1);
  });

  it('should call getMovieGenres and getTopRatedMovies on ngOnInit', () => {
    spyOn(component, 'getMovieGenres');
    spyOn(component, 'getTopRatedMovies');
    component.ngOnInit();
    expect(component.getMovieGenres).toHaveBeenCalled();
    expect(component.getTopRatedMovies).toHaveBeenCalled();
  });

  it('should update currentPage and call getTopRatedMovies on changePage', () => {
    spyOn(component, 'getTopRatedMovies');
    component.changePage(2);
    expect(component.currentPage).toEqual(2);
    expect(component.getTopRatedMovies).toHaveBeenCalled();
  });

  it('should set genreList on getMovieGenres', () => {
    const mockGenreList = { genres: [{ id: 1, name: 'Action' }] };
    spyOn(movieService, 'getGenres').and.returnValue(of(mockGenreList));
    component.getMovieGenres();
    expect(component.genreList).toEqual(mockGenreList);
  });

  it('should return genre name for a given genreId', () => {
    component.genreList = { genres: [{ id: 1, name: 'Action' }] };
    const genreName = component.getGenreName(1);
    expect(genreName).toEqual('Action');
  });

  it('should return an array of genre names for given genreIds', () => {
    component.genreList = { genres: [{ id: 1, name: 'Action' }, { id: 2, name: 'Comedy' }] };
    const genreNames = component.getGenreNames([1, 2]);
    expect(genreNames).toEqual(['Action', 'Comedy']);
  });
});
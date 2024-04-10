import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCatalogHomePageComponent } from './movie-catalog-home-page.component';
import { provideHttpClient } from '@angular/common/http';
import { MovieService } from '@shared/services/movies/movie.service';
import { Genre, GenreResponse, Movie, MovieResponse } from '@shared/models/movie';
import { of } from 'rxjs';

import {provideRouter} from '@angular/router';
import {RouterTestingHarness} from '@angular/router/testing';

describe('MovieCatalogHomePageComponent', () => {
  let component: MovieCatalogHomePageComponent;
  let movieService: MovieService;
  let fixture: ComponentFixture<MovieCatalogHomePageComponent>;
  let harness: RouterTestingHarness;
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
    vote_count: 0,
    favorite: false
  };
  const movies: MovieResponse = {
    page: 1,
    results: [movie],
    total_pages: 1,
    total_results: 1
  };
  const genres: GenreResponse = {
    genres: [
      { id: 1, name: 'Action' },
      { id: 2, name: 'Adventure' }
    ]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCatalogHomePageComponent],
      providers: [
        provideHttpClient(),
        provideRouter([
          {path: 'catalog', component: MovieCatalogHomePageComponent}
        ]),
      ],
    })
    .compileComponents();
    
    harness = await RouterTestingHarness.create();
    fixture = TestBed.createComponent(MovieCatalogHomePageComponent);
    movieService = TestBed.inject(MovieService);
    spyOn(movieService, 'getMovies').and.returnValue(of(movies));
    spyOn(movieService, 'searchMovie').and.returnValue(of(movies));
    spyOn(movieService, 'getGenres').and.returnValue(of(genres));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getMovies when search is empty', () => {
    spyOn(component, 'getMovies');

    component.search = '';
    component.searchMovie();

    expect(component.getMovies).toHaveBeenCalled();
  });

  it('should call searchMovie when search is not empty', () => {
    component.search = 'Avengers';
    component.searchMovie();

    expect(movieService.searchMovie).toHaveBeenCalledWith('Avengers', 1);
  });

  it('should update search value on onKey', () => {
    const event: any = { target: { value: 'Avengers' } };

    component.onKey(event);

    expect(component.search).toBe('Avengers');
  });

  it('should change the current page and call searchMovie on changePage', () => {
    spyOn(component, 'searchMovie');
    const page = 2;
    component.changePage(page);
    expect(component.currentPage).toBe(page);
    expect(component.searchMovie).toHaveBeenCalled();
  });

  it('should set favorites from localStorage on ngOnInit', () => {
    const favorites: Movie[] = [movie];
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(favorites));
    component.ngOnInit();
    expect(component.favorites).toEqual(favorites);
  });

  it('should set genreList on getMovieGenres', () => {
    component.getMovieGenres();
    expect(component.genreList).toEqual(genres);
  });

  it('should return genre name on getGenreName', () => {
    const genreId = 1;
    const genreName = 'Action';
    component.genreList = genres;
    const result = component.getGenreName(genreId);
    expect(result).toBe(genreName);
  });

  it('should return an array of genre names on getGenreNames', () => {
    const genreIds = [1, 2];
    const genreNames = ['Action', 'Adventure'];
    component.genreList = genres;
    const result = component.getGenreNames(genreIds);
    expect(result).toEqual(genreNames);
  });
  
  it('should set favorites from localStorage on ngOnInit', () => {
    const favorites: Movie[] = [movie];
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(favorites));
  
    component.ngOnInit();
  
    expect(component.favorites).toEqual(favorites);
  });
  
  it('should call getMovieGenres and searchMovie on ngOnInit', () => {
    spyOn(component, 'getMovieGenres');
    spyOn(component, 'searchMovie');
  
    component.ngOnInit();
  
    expect(component.getMovieGenres).toHaveBeenCalled();
    expect(component.searchMovie).toHaveBeenCalled();
  });
});
import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { GenreResponse, Movie } from '../../models/movie';
import { firstValueFrom } from 'rxjs';

describe('MovieService', () => {
  let service: MovieService;
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(MovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should request getMovies', async () => {
    const httpTesting = TestBed.inject(HttpTestingController);
    const movie$ = service.getMovies(1);
    const moviePromise = firstValueFrom(movie$);
    const req = httpTesting.expectOne('https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1&api_key=8edfd0871c45ff6fbffc33263bdd4fde');
    expect(req.request.method).toBe('GET');
    req.flush({page: 1, results: [movie], total_pages: 1, total_results: 1});
    expect(await moviePromise).toEqual({page: 1, results: [movie], total_pages: 1, total_results: 1});
  });

  it('should request searchMovie', async () => {
    const httpTesting = TestBed.inject(HttpTestingController);
    const movie$ = service.searchMovie('test', 1);
    const moviePromise = firstValueFrom(movie$);
    const req = httpTesting.expectOne('https://api.themoviedb.org/3/search/movie?language=pt-BR&page=1&api_key=8edfd0871c45ff6fbffc33263bdd4fde&query=test');
    expect(req.request.method).toBe('GET');
    req.flush({page: 1, results: [movie], total_pages: 1, total_results: 1});
    expect(await moviePromise).toEqual({page: 1, results: [movie], total_pages: 1, total_results: 1});
  });

  it('should request getGenres', async () => {
    const httpTesting = TestBed.inject(HttpTestingController);
    const genreResponse: GenreResponse = {
      genres: [
        { id: 1, name: 'Action' },
        { id: 2, name: 'Comedy' },
        { id: 3, name: 'Drama' }
      ]
    };

    const expectedResponse = genreResponse;

    const genres$ = service.getGenres();
    const genresPromise = genres$.toPromise();

    const req = httpTesting.expectOne('https://api.themoviedb.org/3/genre/movie/list?language=pt-BR&api_key=8edfd0871c45ff6fbffc33263bdd4fde');
    expect(req.request.method).toBe('GET');
    req.flush(expectedResponse);

    const result = await genresPromise;
    expect(result).toEqual(expectedResponse);
  });

  it('should request getTopRatedMovies', async () => {
    const httpTesting = TestBed.inject(HttpTestingController);
    const movie$ = service.getTopRatedMovies(1);
    const moviePromise = firstValueFrom(movie$);

    const req = httpTesting.expectOne('https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1&api_key=8edfd0871c45ff6fbffc33263bdd4fde');
    expect(req.request.method).toBe('GET');

    req.flush({page: 1, results: [movie], total_pages: 1, total_results: 1});
    expect(await moviePromise).toEqual({page: 1, results: [movie], total_pages: 1, total_results: 1});
  });

});

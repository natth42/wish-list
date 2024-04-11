import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { GenreResponse, Movie } from '../../models/movie';
import { firstValueFrom } from 'rxjs';
import { genreResponseMock, movieMock } from '@shared/mocks/movies';

describe('MovieService', () => {
  let service: MovieService;
  const apiKey = '8edfd0871c45ff6fbffc33263bdd4fde';
  const movie: Movie = movieMock;

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
    const req = httpTesting.expectOne(`https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1&api_key=${apiKey}`);
    
    expect(req.request.method).toBe('GET');

    req.flush({page: 1, results: [movie], total_pages: 1, total_results: 1});
    expect(await moviePromise).toEqual({page: 1, results: [movie], total_pages: 1, total_results: 1});
  });

  it('should request searchMovie', async () => {
    const httpTesting = TestBed.inject(HttpTestingController);
    const movie$ = service.searchMovie('test', 1);
    const moviePromise = firstValueFrom(movie$);
    const req = httpTesting.expectOne(`https://api.themoviedb.org/3/search/movie?language=pt-BR&page=1&api_key=${apiKey}&query=test`);

    expect(req.request.method).toBe('GET');

    req.flush({page: 1, results: [movie], total_pages: 1, total_results: 1});
    expect(await moviePromise).toEqual({page: 1, results: [movie], total_pages: 1, total_results: 1});
  });

  it('should request getGenres', async () => {
    const httpTesting = TestBed.inject(HttpTestingController);
    const genreResponse: GenreResponse = genreResponseMock;
    const expectedResponse = genreResponse;
    const genres$ = service.getGenres();
    const genresPromise = firstValueFrom(genres$);

    const req = httpTesting.expectOne(`https://api.themoviedb.org/3/genre/movie/list?language=pt-BR&api_key=${apiKey}`);

    expect(req.request.method).toBe('GET');

    req.flush(expectedResponse);
    expect(await genresPromise).toEqual(expectedResponse);
  });

  it('should request getTopRatedMovies', async () => {
    const httpTesting = TestBed.inject(HttpTestingController);
    const movie$ = service.getTopRatedMovies(1);
    const moviePromise = firstValueFrom(movie$);

    const req = httpTesting.expectOne(`https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1&api_key=${apiKey}`);
    expect(req.request.method).toBe('GET');

    req.flush({page: 1, results: [movie], total_pages: 1, total_results: 1});
    expect(await moviePromise).toEqual({page: 1, results: [movie], total_pages: 1, total_results: 1});
  });

  it('should request getConfiguration', async () => {
    const httpTesting = TestBed.inject(HttpTestingController);
    const movie$ = service.getConfiguration();
    const moviePromise = firstValueFrom(movie$);

    const req = httpTesting.expectOne(`https://api.themoviedb.org/3/configuration?api_key=${apiKey}`);
    expect(req.request.method).toBe('GET');

    req.flush({images: {base_url: 'http://image.tmdb.org/t/p/', secure_base_url: 'https://image.tmdb.org/t/p/'}});
    expect(await moviePromise).toEqual({images: {base_url: 'http://image.tmdb.org/t/p/', secure_base_url: 'https://image.tmdb.org/t/p/'}});
  });
});

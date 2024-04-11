import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration, GenreResponse, MovieResponse, MovieSearchResponse } from '../../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = '8edfd0871c45ff6fbffc33263bdd4fde';

  constructor(private http: HttpClient) {}

  getMovies(page: number) {
    return this.http.get<MovieResponse>(`https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=${page}&api_key=${this.apiKey}`);
  }

  getTopRatedMovies(page: number) {
    return this.http.get<MovieResponse>(`https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=${page}&api_key=${this.apiKey}`);
  }

  searchMovie(query: string, page: number) {
    return this.http.get<MovieSearchResponse>(`https://api.themoviedb.org/3/search/movie?language=pt-BR&page=${page}&api_key=${this.apiKey}&query=${query}`);
  }

  getGenres () {
    return this.http.get<GenreResponse>(`https://api.themoviedb.org/3/genre/movie/list?language=pt-BR&api_key=${this.apiKey}`);
  }

  getConfiguration () {
    return this.http.get<Configuration>(`https://api.themoviedb.org/3/configuration?api_key=${this.apiKey}`);
  }
}

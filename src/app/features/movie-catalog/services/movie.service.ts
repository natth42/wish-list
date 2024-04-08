import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenreResponse, Movie, MovieResponse, MovieSearchResponse } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {}

  getMovies(page: number) {
    return this.http.get<MovieResponse>(`https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=${page}&api_key=8edfd0871c45ff6fbffc33263bdd4fde`);
  }

  searchMovie(query: string, page: number) {
    return this.http.get<MovieSearchResponse>(`https://api.themoviedb.org/3/search/movie?language=pt-BR&page=${page}&api_key=8edfd0871c45ff6fbffc33263bdd4fde&query=${query}`);
  }

  getGenres () {
    return this.http.get<GenreResponse>('https://api.themoviedb.org/3/genre/movie/list?language=pt-BR&api_key=8edfd0871c45ff6fbffc33263bdd4fde');
  }
}

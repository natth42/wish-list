import { Component } from '@angular/core';
import { HeaderComponent } from '@core/components/header/header.component';
import { SideMenuComponent } from '@core/components/side-menu/side-menu.component';
import { CardItemComponent } from '../../components/card-item/card-item.component';
import { Genre, GenreResponse, Movie, MovieResponse } from '@core/models/movie';
import { MovieService } from '@core/services/movies/movie.service';
import { Observable, catchError, map, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "@shared/components/button/button.component";
import { ButtonIconComponent } from "@shared/components/button-icon/button-icon.component";
import { InputComponent } from "@shared/components/input/input.component";
import { PaginationComponent } from "@shared/components/pagination/pagination.component";

import { ActivatedRoute } from '@angular/router';
import { MovieModalComponent } from "../../components/movie-modal/movie-modal.component";
import MicroModal from 'micromodal';

@Component({
    selector: 'app-movie-catalog-home-page',
    standalone: true,
    templateUrl: './movie-catalog-home-page.component.html',
    styleUrl: './movie-catalog-home-page.component.css',
    imports: [CommonModule, HeaderComponent, SideMenuComponent, CardItemComponent, ButtonComponent, ButtonIconComponent, InputComponent, PaginationComponent, MovieModalComponent]
})
export class MovieCatalogHomePageComponent {
  movieList$!: Observable<MovieResponse>;
  public genreList: GenreResponse = { genres: [] };
  
  public search: string = '';
  public errorMessage: string = '';
  public currentPage: number = 1;
  public favorites: Movie[] = [];
  public modalInfo: Movie = {
    id: 0, title: '', overview: '', poster_path: '', release_date: '', genre_ids: [],
    adult: false,
    backdrop_path: '',
    original_language: '',
    original_title: '',
    popularity: 0,
    video: false,
    vote_average: 0,
    vote_count: 0
  };

  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.search = this.route.snapshot.queryParamMap.get('title') ?? '';
    localStorage.getItem('favorites') ? this.favorites = JSON.parse(localStorage.getItem('favorites') || '') : [];
    this.getMovieGenres();
    this.searchMovie();
  }

  changePage(page: any) {
    this.currentPage = page;
    this.searchMovie();
  }

  getMovies() {
    this.movieList$ = this.movieService.getMovies(this.currentPage).pipe(
      map((response) => {
        const resultWithFavorites = response.results.map((movie: Movie) => {movie.favorite = this.favorites.find((favorite: Movie) => favorite.id === movie.id) ? movie.favorite = true : movie.favorite = false; return movie;});
        return { ...response, results: resultWithFavorites };
      }),
      catchError(() => {
        this.errorMessage = 'Houve um problema ao buscar o filme, tente novamente mais tarde!';
        return of({ page: 0, results: [], total_pages: 0, total_results: 0});
      })
    );
  }

  getMovieGenres() {
    this.movieService.getGenres().subscribe((response) => {
      this.genreList = response;
    });
  }

  getGenreName(genreId: number): string {
    const genre = this.genreList.genres.find((genre: Genre) => genre.id === genreId);
    return genre?.name || '';
  }

  getGenreNames(genreIds: number[]): Array<string> {
    return genreIds.map((genreId) => this.getGenreName(genreId));
  }

  searchMovie() {
    if (this.search === '') {
      this.getMovies();
    } else {
      this.movieList$ = this.movieService.searchMovie(this.search, this.currentPage);
    }
  }

  onKey(event: any) {
    this.search = event.target.value;
  }

  openModal(movie: Movie) {
    this.modalInfo = movie;
    setTimeout(() => {
      MicroModal.show(`modal-movies`);
    }, 100)
  }
}


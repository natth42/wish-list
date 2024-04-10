import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "@core/components/header/header.component";
import { SideMenuComponent } from "@core/components/side-menu/side-menu.component";
import { MovieService } from '@shared/services/movies/movie.service';
import { Genre, GenreResponse, MovieResponse } from '@shared/models/movie';
import { Observable, catchError, of } from 'rxjs';
import { PaginationComponent } from "@shared/components/pagination/pagination.component";
import { CommonModule } from '@angular/common';
import { ButtonIconComponent } from "@shared/components/button-icon/button-icon.component";
import { Router } from '@angular/router';
import { CardItemComponent } from '@shared/components/card-movie-item/card-movie-item.component';

@Component({
    selector: 'app-ranking',
    standalone: true,
    templateUrl: './ranking.component.html',
    styleUrl: './ranking.component.css',
    imports: [CommonModule, HeaderComponent, SideMenuComponent, CardItemComponent, PaginationComponent, ButtonIconComponent]
})
export class RankingComponent implements OnInit{
  movieList$!: Observable<MovieResponse>;

  public genreList: GenreResponse = { genres: [] };
  public errorMessage: string = '';
  public currentPage: number = 1;

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.getMovieGenres();
    this.getTopRatedMovies();
  }

  changePage(page: number) {
    this.currentPage = page;
    this.getTopRatedMovies();
  }

  getTopRatedMovies() {	
    this.movieList$ = this.movieService.getTopRatedMovies(this.currentPage).pipe(
      catchError(() => {
        this.errorMessage = 'Houve um problema ao buscar os filmes, tente novamente mais tarde!';
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

  goToCatalog(movieTitle: string) {
    this.router.navigate(['/catalog'], { queryParams: { title: movieTitle } });
  }
}

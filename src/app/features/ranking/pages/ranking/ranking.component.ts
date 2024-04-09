import { Component } from '@angular/core';
import { HeaderComponent } from "@core/components/header/header.component";
import { SideMenuComponent } from "@core/components/side-menu/side-menu.component";
import { MovieService } from '@core/services/movies/movie.service';
import { Genre, GenreResponse, MovieResponse } from '@core/models/movie';
import { Observable, catchError, of } from 'rxjs';
import { CardItemComponent } from "../../../wish-list/components/card-item/card-item.component";
import { PaginationComponent } from "@shared/components/pagination/pagination.component";
import { CommonModule } from '@angular/common';
import { ButtonIconComponent } from "@shared/components/button-icon/button-icon.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-ranking',
    standalone: true,
    templateUrl: './ranking.component.html',
    styleUrl: './ranking.component.css',
    imports: [CommonModule, HeaderComponent, SideMenuComponent, CardItemComponent, PaginationComponent, ButtonIconComponent]
})
export class RankingComponent {
  movieList$!: Observable<MovieResponse>;

  public genreList: GenreResponse = { genres: [] };
  public errorMessage: string = '';
  public currentPage: number = 1;

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.getMovieGenres();
    this.getTopRatedMovies();
  }

  changePage(page: any) {
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

  goToCatalog() {
    this.router.navigate(['/catalog']);
  }
}

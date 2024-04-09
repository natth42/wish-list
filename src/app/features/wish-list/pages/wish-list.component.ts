import { Component } from '@angular/core';
import { HeaderComponent } from "@core/components/header/header.component";
import { SideMenuComponent } from "@core/components/side-menu/side-menu.component";
import { Genre, GenreResponse, MovieFavorited } from '@core/models/movie';
import { MovieService } from '@core/services/movies/movie.service';
import { ButtonComponent } from "@shared/components/button/button.component";

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroUsers } from '@ng-icons/heroicons/outline';
import { ButtonIconComponent } from "@shared/components/button-icon/button-icon.component";
import { CardItemComponent } from '../components/card-item/card-item.component';

@Component({
    selector: 'app-wish-list',
    standalone: true,
    templateUrl: './wish-list.component.html',
    styleUrl: './wish-list.component.css',
    viewProviders: [provideIcons({ heroUsers })],
    imports: [HeaderComponent, SideMenuComponent, CardItemComponent, ButtonComponent, NgIconComponent, ButtonIconComponent]
})
export class WishListComponent {
  public favorites: Array<MovieFavorited> = [];
  public genreList: GenreResponse = { genres: [] };
  public errorMessage: string = '';

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    localStorage.getItem('favorites') ? this.favorites = JSON.parse(localStorage.getItem('favorites') || '') : [];
    this.getMovieGenres();
    console.log(this.favorites);
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
  orderBy(type: string) {
    if (type === 'newst') {
      this.favorites = this.favorites.sort((a, b) => new Date(a.added_at).getTime() - new Date(b.added_at).getTime());
    } else if (type === 'older') {
      this.favorites = this.favorites.sort((a, b) => new Date(b.added_at).getTime() - new Date(a.added_at).getTime());
    }
  }
  removeFromFavorites(id: number) {
    this.favorites = this.favorites.filter((favorite) => favorite.id !== id);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}

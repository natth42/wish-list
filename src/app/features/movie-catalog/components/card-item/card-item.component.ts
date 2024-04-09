import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie, MovieFavorited } from '@core/models/movie';
import { MovieModalComponent } from "../movie-modal/movie-modal.component";
import { ButtonComponent } from "@shared/components/button/button.component";

@Component({
    selector: 'app-card-item',
    standalone: true,
    templateUrl: './card-item.component.html',
    styleUrl: './card-item.component.css',
    imports: [MovieModalComponent, ButtonComponent]
})
export class CardItemComponent implements OnInit {
  @Input()
  item!: Movie;
  @Input()
  genres: string[] = [];
  @Output()
  OpenModal = new EventEmitter<void>();

  public favorites: Array<MovieFavorited> = [];

  ngOnInit() {
    localStorage.getItem('favorites') ? this.favorites = JSON.parse(localStorage.getItem('favorites') || '') : [];
  }

  handleClick (id: number) {
    if (this.item.favorite) {
      this.removeFromFavorites(id);
    } else {
      this.OpenModal.emit();
    }
  }

  removeFromFavorites(id: number) {
    this.item.favorite = false;
    this.favorites = this.favorites.filter((favorite) => favorite.id !== id);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  getButtonText() {
    return this.item.favorite ? 'Adicionado' : 'Ver mais';
  }
}

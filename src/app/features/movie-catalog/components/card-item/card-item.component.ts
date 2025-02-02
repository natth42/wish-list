import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Configuration, Movie, MovieFavorited } from '@shared/models/movie';
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
  @Input() config: Configuration = {
    images: {
      base_url: '',
      secure_base_url: '',
    }
  };
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

  onImgError(event: any) {
    event.target.src = 'https://via.placeholder.com/300x450.png?text=Image+not+found';
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

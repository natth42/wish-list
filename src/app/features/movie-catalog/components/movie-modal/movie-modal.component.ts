import { Component, Input, OnInit } from '@angular/core';
import MicroModal from 'micromodal';
import { Configuration, Movie, MovieFavorited } from '@shared/models/movie';
import { ButtonComponent } from "@shared/components/button/button.component";

@Component({
    selector: 'app-movie-modal',
    standalone: true,
    templateUrl: './movie-modal.component.html',
    styleUrl: './movie-modal.component.css',
    imports: [ButtonComponent]
})
export class MovieModalComponent implements OnInit{
  public favorites: MovieFavorited[] = [];

  @Input() item!: Movie;
  @Input() config: Configuration = {
    images: {
      base_url: '',
      secure_base_url: '',
    }
  };
  
  ngOnInit() {
    MicroModal.init();
    localStorage.getItem('favorites') ? this.favorites = JSON.parse(localStorage.getItem('favorites') || '') : [];
  }

  addToFavorities() {
    this.item.favorite = !this.item.favorite;
    this.favorites.push({...this.item, added_at: new Date().toISOString()});
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  onImgError(event: any) {
    event.target.src = 'https://via.placeholder.com/300x450.png?text=Image+not+found';
  }

  getButtonText() {
    return this.item.favorite ? 'Adicionado' : 'Adicionar aos favoritos';
  }
}

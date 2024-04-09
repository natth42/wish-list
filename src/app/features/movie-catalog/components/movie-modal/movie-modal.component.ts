import { Component, Input } from '@angular/core';
import MicroModal from 'micromodal';
import { Movie, MovieFavorited } from '@core/models/movie';
import { ButtonComponent } from "@shared/components/button/button.component";

@Component({
    selector: 'app-movie-modal',
    standalone: true,
    templateUrl: './movie-modal.component.html',
    styleUrl: './movie-modal.component.css',
    imports: [ButtonComponent]
})
export class MovieModalComponent {
  @Input() item!: Movie;
  public favorites: MovieFavorited[] = [];
  
  ngOnInit() {
    MicroModal.init();
    localStorage.getItem('favorites') ? this.favorites = JSON.parse(localStorage.getItem('favorites') || '') : [];
  }

  addToFavorities() {
    this.item.favorite = !this.item.favorite;
    this.favorites.push({...this.item, added_at: new Date().toISOString()});
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}

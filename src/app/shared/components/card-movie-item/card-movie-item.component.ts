import { Component, Input } from '@angular/core';
import { Configuration, Movie } from '@shared/models/movie';
import { ButtonComponent } from "../button/button.component";

@Component({
    selector: 'app-card-movie-item',
    standalone: true,
    templateUrl: './card-movie-item.component.html',
    styleUrl: './card-movie-item.component.css',
    imports: [ButtonComponent]
})
export class CardItemComponent {
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

  onImgError(event: any) {
    event.target.src = 'https://via.placeholder.com/300x450.png?text=Image+not+found';
  }
}

import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
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
}

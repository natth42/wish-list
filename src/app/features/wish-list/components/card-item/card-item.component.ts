import { Component, Input } from '@angular/core';
import { Movie } from '../../../../core/models/movie';
import { ButtonComponent } from "../../../../shared/components/button/button.component";

@Component({
    selector: 'app-card-list-item',
    standalone: true,
    templateUrl: './card-item.component.html',
    styleUrl: './card-item.component.css',
    imports: [ButtonComponent]
})
export class CardItemComponent {
  @Input()
  item!: Movie;
  @Input()
  genres: string[] = [];
}

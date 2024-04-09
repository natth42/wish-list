import { Component, Input } from '@angular/core';
import MicroModal from 'micromodal';
import { Movie } from '@core/models/movie';
import { MovieModalComponent } from "../movie-modal/movie-modal.component";
import { ButtonComponent } from "@shared/components/button/button.component";

@Component({
    selector: 'app-card-item',
    standalone: true,
    templateUrl: './card-item.component.html',
    styleUrl: './card-item.component.css',
    imports: [MovieModalComponent, ButtonComponent]
})
export class CardItemComponent {
  @Input()
  item!: Movie;
  @Input()
  genres: string[] = [];

  openModal (id: number) {
    MicroModal.show(`modal-${ id }`);
  }

  getButtonText() {
    return this.item.favorite ? 'Adicionado' : 'Ver mais';
  }
}

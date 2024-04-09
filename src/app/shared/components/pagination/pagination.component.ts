import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  @Input()
  currentPage!: number;
  @Input() totalPages: number = 1;
  @Output()
  changePage = new EventEmitter<number>();

  previousPage() {
    this.changePage.emit(this.currentPage - 1);
  }

  nextPage() {
    this.changePage.emit(this.currentPage + 1);
  }
}

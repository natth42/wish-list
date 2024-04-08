import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-icon',
  standalone: true,
  imports: [],
  templateUrl: './button-icon.component.html',
  styleUrl: './button-icon.component.css'
})
export class ButtonIconComponent {
  @Input() icon: string = '';
  @Input() iconAlt: string = '';
}

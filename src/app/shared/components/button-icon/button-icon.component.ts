import { Component, Input } from '@angular/core';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroMagnifyingGlass, heroXMark, heroChevronRight } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-button-icon',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({ heroMagnifyingGlass, heroXMark, heroChevronRight })],
  templateUrl: './button-icon.component.html',
  styleUrl: './button-icon.component.css'
})
export class ButtonIconComponent {
  @Input() icon: string = '';
  @Input() iconAlt: string = '';
}

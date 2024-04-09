import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [ButtonComponent]
})
export class HeaderComponent {
    @Input() title: string = '';

    constructor(private router: Router) {}

    goToWishList() {
        this.router.navigate(['/wish-list']);
    }
}

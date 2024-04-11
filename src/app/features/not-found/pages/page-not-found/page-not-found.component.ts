import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from "@core/components/header/header.component";
import { SideMenuComponent } from "@core/components/side-menu/side-menu.component";
import { ButtonComponent } from "@shared/components/button/button.component";

@Component({
    selector: 'app-page-not-found',
    standalone: true,
    templateUrl: './page-not-found.component.html',
    styleUrl: './page-not-found.component.css',
    imports: [HeaderComponent, SideMenuComponent, ButtonComponent]
})
export class PageNotFoundComponent {
    constructor(private router: Router) {}

    goToCatalog() {
        this.router.navigate(['/catalog']);
    }
}

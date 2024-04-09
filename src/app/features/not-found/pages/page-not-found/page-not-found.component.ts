import { Component } from '@angular/core';
import { HeaderComponent } from "@core/components/header/header.component";
import { SideMenuComponent } from "@core/components/side-menu/side-menu.component";

@Component({
    selector: 'app-page-not-found',
    standalone: true,
    templateUrl: './page-not-found.component.html',
    styleUrl: './page-not-found.component.css',
    imports: [HeaderComponent, SideMenuComponent]
})
export class PageNotFoundComponent {

}

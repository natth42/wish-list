import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../core/components/header/header.component";
import { SideMenuComponent } from "../../../../core/components/side-menu/side-menu.component";

@Component({
    selector: 'app-ranking',
    standalone: true,
    templateUrl: './ranking.component.html',
    styleUrl: './ranking.component.css',
    imports: [HeaderComponent, SideMenuComponent]
})
export class RankingComponent {

}

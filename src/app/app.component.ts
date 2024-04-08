import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieCatalogHomePageComponent } from "./features/movie-catalog/pages/movie-catalog-home-page/movie-catalog-home-page.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MovieCatalogHomePageComponent]
})
export class AppComponent {
}

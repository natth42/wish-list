import { Routes } from '@angular/router';
import { MovieCatalogHomePageComponent } from './features/movie-catalog/pages/movie-catalog-home-page/movie-catalog-home-page.component';
import { WishListComponent } from './features/wish-list/pages/wish-list.component';

export const routes: Routes = [
    { path: '',   redirectTo: '/catalog', pathMatch: 'full' },
    { path: 'catalog', component: MovieCatalogHomePageComponent },
    { path: 'wish-list', component: WishListComponent },
];

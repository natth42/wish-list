import { Routes } from '@angular/router';
import { MovieCatalogHomePageComponent } from './features/movie-catalog/pages/movie-catalog-home-page/movie-catalog-home-page.component';
import { WishListComponent } from './features/wish-list/pages/wish-list.component';
import { RankingComponent } from './features/ranking/pages/ranking/ranking.component';
import { PageNotFoundComponent } from './features/not-found/pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '',   redirectTo: '/catalog', pathMatch: 'full' },
    { path: 'catalog', component: MovieCatalogHomePageComponent },
    { path: 'wish-list', component: WishListComponent },
    { path: 'ranking', component: RankingComponent },
    // {
    //     path: 'admin',
    //     loadChildren: () => import('microfrontend1/Module')
    //       .then(m => m.AdminModule)
    //  },
    { path: '**', component: PageNotFoundComponent }
];

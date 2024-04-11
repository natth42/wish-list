import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuComponent } from './side-menu.component';
import { provideRouter } from '@angular/router';
import { MovieCatalogHomePageComponent } from '../../../features/movie-catalog/pages/movie-catalog-home-page/movie-catalog-home-page.component';
import { WishListComponent } from '../../../features/wish-list/pages/wish-list.component';
import { RankingComponent } from '../../../features/ranking/pages/ranking/ranking.component';

describe('SideMenuComponent', () => {
  let component: SideMenuComponent;
  let fixture: ComponentFixture<SideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideMenuComponent],
      providers: [
        provideRouter([
          {path: 'catalog', component: MovieCatalogHomePageComponent},
          {path: 'wish-list', component: WishListComponent},
          {path: 'ranking', component: RankingComponent},
        ]),
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

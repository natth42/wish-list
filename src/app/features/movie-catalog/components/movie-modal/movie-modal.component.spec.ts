import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieModalComponent } from './movie-modal.component';
import { Movie, MovieFavorited } from '@shared/models/movie';
import { favoriteListMock, movieMock } from '@shared/mocks/movies';

describe('MovieModalComponent', () => {
  let component: MovieModalComponent;
  let fixture: ComponentFixture<MovieModalComponent>;
  let store = {};
  const movie: Movie = {...movieMock};

  const favorites: Array<MovieFavorited> = favoriteListMock;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieModalComponent);
    component = fixture.componentInstance;
    component.item = movie;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize favorites array', () => {
    expect(component.favorites).toEqual([]);
  });

  it('should set favorites array from localStorage if it exists', () => {
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(favorites));
    component.ngOnInit();
    expect(component.favorites).toEqual(favorites);
  });
  
  it('should set favorites array to an empty array if localStorage does not exist', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);
    component.ngOnInit();
    expect(component.favorites).toEqual([]);
  });

  it('should set favorites array to an empty array if localStorage does not exist', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);
    component.ngOnInit();
    expect(component.favorites).toEqual([]);
  });

  it('should add item to favorites array and update localStorage', () => {
    component.favorites = favorites;
    spyOn(localStorage, 'setItem');
    component.addToFavorities();
    expect(localStorage.setItem).toHaveBeenCalledWith('favorites', JSON.stringify(component.favorites));
  });

  it('should return "Adicionado" if item is already favorite', () => {
    component.item.favorite = true;
    const buttonText = component.getButtonText();
    expect(buttonText).toEqual('Adicionado');
  });
  
  it('should return "Adicionar aos favoritos" if item is not favorite', () => {
    component.item.favorite = false;
    const buttonText = component.getButtonText();
    expect(buttonText).toEqual('Adicionar aos favoritos');
  });
});
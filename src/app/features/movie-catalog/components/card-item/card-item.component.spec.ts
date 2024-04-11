import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemComponent } from './card-item.component';
import { MovieModalComponent } from '../movie-modal/movie-modal.component';
import { Movie, MovieFavorited } from '@shared/models/movie';
import { favoriteListMock, movieMock } from '@shared/mocks/movies';

describe('CardItemComponent', () => {
  let component: CardItemComponent;
  let fixture: ComponentFixture<CardItemComponent>;
  const movie: Movie = {...movieMock};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardItemComponent, MovieModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardItemComponent);
    component = fixture.componentInstance;
    component.item = movie;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set item input', () => {
    expect(component.item).toEqual(movie);
  });

  it('should return "Adicionado" if item is favorite', () => {
    component.item.favorite = true;
    expect(component.getButtonText()).toBe('Adicionado');
  });

  it('should return "Ver mais" if item is not favorite', () => {
    component.item.favorite = false;
    expect(component.getButtonText()).toBe('Ver mais');
  });

  it('should remove from favorites if item is already favorite', () => {
    const spy = spyOn(component, 'removeFromFavorites');
    component.item.favorite = true;
    component.handleClick(1);
    expect(spy).toHaveBeenCalledWith(1);
  });
  
  it('should emit OpenModal event if item is not favorite', () => {
    spyOn(component.OpenModal, 'emit');
    component.item.favorite = false;
    component.handleClick(1);
    expect(component.OpenModal.emit).toHaveBeenCalled();
  });

  it('should initialize favorites from localStorage', () => {
    const favorites: Array<MovieFavorited> = favoriteListMock;
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(favorites));

    component.ngOnInit();

    expect(component.favorites).toEqual(favorites);
    expect(localStorage.getItem).toHaveBeenCalledWith('favorites');
  });

  it('should initialize favorites as an empty array if localStorage is empty', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);

    component.ngOnInit();

    expect(component.favorites).toEqual([]);
    expect(localStorage.getItem).toHaveBeenCalledWith('favorites');
  });

  it('should remove from favorites if item is already favorite', () => {
    const spy = spyOn(component, 'removeFromFavorites');
    component.item.favorite = true;
    component.handleClick(1);
    expect(spy).toHaveBeenCalledWith(1);
  });
  
  it('should remove item from favorites and update localStorage', () => {
    spyOn(localStorage, 'setItem');
    const id = 1;
    component.item.favorite = true;
    component.favorites = [
      {
        id: 1,
        added_at: '2022-01-01',
        adult: false,
        backdrop_path: '',
        genre_ids: [1],
        original_language: '',
        original_title: '',
        overview: '',
        popularity: 0,
        poster_path: '',
        release_date: '',
        title: '',
        video: false,
        vote_average: 0,
        vote_count: 0
      }
    ];
  
    // Act
    component.removeFromFavorites(id);
  
    // Assert
    expect(component.item.favorite).toBe(false);
    expect(component.favorites).toEqual([]);
    expect(localStorage.setItem).toHaveBeenCalledWith('favorites', '[]');
  });
});

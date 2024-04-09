import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemComponent } from './card-item.component';
import { MovieModalComponent } from '../movie-modal/movie-modal.component';
import { Movie } from '../../../../core/models/movie';
import MicroModal from 'micromodal';

describe('CardItemComponent', () => {
  let component: CardItemComponent;
  let fixture: ComponentFixture<CardItemComponent>;
  const movie: Movie = {
    id: 1,
    title: 'Star Wars: Return of the Jedi',
    adult: false,
    backdrop_path: '',
    genre_ids: [1],
    original_language: '',
    original_title: '',
    overview: 'resumo',
    popularity: 0,
    poster_path: '/p1LbrdJ53dGfEhRopG71akfzOVu.jpg',
    release_date: '',
    video: false,
    vote_average: 0,
    vote_count: 0
  };

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

  it('should open modal', () => {
    const spy = spyOn(MicroModal, 'show');
    component.openModal(1);
    expect(spy).toHaveBeenCalledWith('modal-1');
  });

  it('should return "Adicionado" if item is favorite', () => {
    component.item.favorite = true;
    expect(component.getButtonText()).toBe('Adicionado');
  });

  it('should return "Ver mais" if item is not favorite', () => {
    component.item.favorite = false;
    expect(component.getButtonText()).toBe('Ver mais');
  });
});

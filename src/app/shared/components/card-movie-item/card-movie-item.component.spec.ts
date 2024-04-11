import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemComponent } from './card-movie-item.component';
import { Movie } from '../../models/movie';
import { movieMock } from '@shared/mocks/movies';

describe('CardItemComponent', () => {
  let component: CardItemComponent;
  let fixture: ComponentFixture<CardItemComponent>;
  const movie: Movie = movieMock;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardItemComponent]
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

  it('should set item input', () => {
    const imgElement = fixture.nativeElement.querySelector('img');
    spyOn(imgElement, 'addEventListener');
    component.onImgError({ target: imgElement });
    expect(imgElement.src).toContain('/assets/images/poster-placeholder.png');
  });
});

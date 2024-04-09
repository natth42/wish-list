import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListComponent } from './wish-list.component';
import { MovieService } from '../../../core/services/movies/movie.service';
import { of } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';

describe('WishListComponent', () => {
  let component: WishListComponent;
  let fixture: ComponentFixture<WishListComponent>;
  let movieService: MovieService;
  const favorites = [
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
    },
    {
      id: 2,
      added_at: '2022-02-01',
      adult: false,
      backdrop_path: '',
      genre_ids: [2],
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
    },
    {
      id: 3,
      added_at: '2022-03-01',
      adult: false,
      backdrop_path: '',
      genre_ids: [4],
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishListComponent],
      providers: [
        provideHttpClient()
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WishListComponent);
    movieService = TestBed.inject(MovieService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize favorites array', () => {
    expect(component.favorites).toEqual([]);
  });

  it('should initialize genreList object', () => {
    expect(component.genreList).toEqual({ genres: [] });
  });

  it('should initialize errorMessage string', () => {
    expect(component.errorMessage).toEqual('');
  });

  it('should call getMovieGenres method on ngOnInit', () => {
    spyOn(component, 'getMovieGenres');
    component.ngOnInit();
    expect(component.getMovieGenres).toHaveBeenCalled();
  });

  it('should set favorites array from localStorage if it exists', () => {
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(favorites));
    component.ngOnInit();
    expect(component.favorites).toEqual(favorites);
  });

  it('should not set favorites array from localStorage if it does not exist', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);
    component.ngOnInit();
    expect(component.favorites).toEqual([]);
  });

  it('should call movieService.getGenres method and set genreList', () => {
    const response = { genres: [{ id: 1, name: 'Action' }] };
    spyOn(movieService, 'getGenres').and.returnValue(of(response));
    component.getMovieGenres();
    expect(component.genreList).toEqual(response);
  });

  it('should return genre name for a given genreId', () => {
    component.genreList = { genres: [{ id: 1, name: 'Action' }] };
    const genreId = 1;
    const genreName = component.getGenreName(genreId);
    expect(genreName).toEqual('Action');
  });

  it('should return empty string if genreId does not exist in genreList', () => {
    component.genreList = { genres: [{ id: 1, name: 'Action' }] };
    const genreId = 2;
    const genreName = component.getGenreName(genreId);
    expect(genreName).toEqual('');
  });

  it('should return an array of genre names for given genreIds', () => {
    component.genreList = { genres: [{ id: 1, name: 'Action' }, { id: 2, name: 'Comedy' }] };
    const genreIds = [1, 2];
    const genreNames = component.getGenreNames(genreIds);
    expect(genreNames).toEqual(['Action', 'Comedy']);
  });

  it('should sort favorites array by added_at in ascending order', () => {
    component.favorites = favorites;
    component.orderBy('newst');
    expect(component.favorites).toEqual([
      favorites[0],
      favorites[1],
      favorites[2]
    ]);
  });

  it('should sort favorites array by added_at in descending order', () => {
    component.favorites = favorites;
    component.orderBy('older');
    expect(component.favorites).toEqual([
      {
        id: 3,
        added_at: '2022-03-01',
        adult: false,
        backdrop_path: '',
        genre_ids: [4],
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
      },
      {
        id: 2,
        added_at: '2022-02-01',
        adult: false,
        backdrop_path: '',
        genre_ids: [2],
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
      },
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
    ]);
  });

  it('should remove item from favorites array by id and update localStorage', () => {
    component.favorites = favorites;
    spyOn(localStorage, 'setItem');
    component.removeFromFavorites(2);
    expect(component.favorites).toEqual([
      favorites[0],
      favorites[2]
    ]);
    expect(localStorage.setItem).toHaveBeenCalledWith('favorites', JSON.stringify(component.favorites));
  });
});
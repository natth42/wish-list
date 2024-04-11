import { GenreResponse, Movie } from '../models/movie';

export const genreResponseMock : GenreResponse = {
    genres: [
      { id: 1, name: 'Action' },
      { id: 2, name: 'Comedy' },
      { id: 3, name: 'Drama' }
    ]
};

export const movieMock : Movie = {
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

export const favoriteListMock = [
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
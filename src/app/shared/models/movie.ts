export interface Movie {
    adult: boolean,
    backdrop_path: string,
    favorite?: boolean,
    genre_ids: Array<number>,
    id: number,
    original_language: string,
    original_title: string,
    overview: string
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export interface MovieFavorited extends Movie {
    added_at: string
}

export interface MovieResponse {  
    page: number,
    results: Array<Movie>,
    total_pages: number,
    total_results: number
}

export interface MovieSearchResponse {
    page: number,
    results: Array<Movie>,
    total_pages: number,
    total_results: number
}

export interface Genre {
    id: number,
    name: string
}

export interface GenreResponse {
    genres: Array<Genre>
}

export interface Configuration {
    images: {
        base_url: string,
        secure_base_url: string,
        backdrop_sizes?: Array<string>,
        logo_sizes?: Array<string>,
        poster_sizes?: Array<string>,
        profile_sizes?: Array<string>,
        still_sizes?: Array<string>
    },
    change_keys?: Array<string>
}

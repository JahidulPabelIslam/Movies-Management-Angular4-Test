import {Injectable} from '@angular/core';

import {Movie} from '../models/movie';

@Injectable()
export class MoviesService {

    private movies: Movie[];
    private nextId: number;
    private defaultMovies: Movie[];

    constructor() {
        this.defaultMovies = [
            {id: 1, name: 'The Fast and the Furious', genre: 'Action', year: 2001},
            {id: 2, name: 'Harry Potter', genre: 'Magic', year: 2003}
        ];

        this.movies = this.getMovies();
        this.getNextId();
    }

    public addMovie(movie: Movie): void {
       movie.id = this.nextId;
        this.movies.push(movie);
        this.setLocalStorageMovies(this.movies);
        this.getNextId();
    }

    public updateMovie(movie: Movie): void {
        const foundIndex = this.movies.findIndex(x => x.id === movie.id);
        this.movies[foundIndex] = movie;
        this.setLocalStorageMovies(this.movies);
    }

    public getMovies(): Movie[] {
        const movies = JSON.parse(localStorage.getItem('j-movies'));
        if (movies === null) {
            this.setLocalStorageMovies(this.defaultMovies);
        }
        return JSON.parse(localStorage.getItem('j-movies'));
    }

    public removeMovie(id: number): void {
        this.movies = this.movies.filter((movie) => movie.id !== id);
        this.setLocalStorageMovies(this.movies);
        this.getNextId();
    }

    public getMovie(id: number): Movie {
        return this.movies.find(movie => movie.id === id);
    }

    // private function to help save the collection to local storage
    private setLocalStorageMovies(movies: Movie[]): void {
        localStorage.setItem('j-movies', JSON.stringify(movies));
    }

    private getNextId(): void {
        const max = this.movies.reduce((prev, current) => (prev.id > current.id) ? prev : current);
        this.nextId = max.id + 1;
    }

}

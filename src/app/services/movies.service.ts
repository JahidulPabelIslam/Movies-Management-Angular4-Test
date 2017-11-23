import { Injectable } from '@angular/core';

import { Movie } from '../classes/movie';

@Injectable()
export class MoviesService {

    private movies: Movie[];
    private nextId: number;

  constructor() {
    this.movies = [
        new Movie(1, 'The Fast and the Furious', 'Honda', 2001),
        new Movie(2, 'Harry Potter', 'Honda' , 2000)
    ];

     this.nextId = 3;
  }

    public addMovie(name: string, genre: string, year: number): void {
        const movie = new Movie(this.nextId, name, genre, year);
        this.movies.push(movie);
        this.nextId++;
    }

    public getMovies(): Movie[] {
        return this.movies;
    }

    public removeMovie(id: number): void {
        this.movies = this.movies.filter((movie) => movie.id !== id);
    }

}

import { Component } from '@angular/core';

import { Movie } from './classes/movie';

const MOVIES: Movie[] = [
    { id: 1, name: 'The Fast and the Furious', genre: 'Honda' , year: 2001},
    { id: 2, name: 'Harry Potter', genre: 'Honda' , year : 2000},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movies Collection';
  movies = MOVIES;
}

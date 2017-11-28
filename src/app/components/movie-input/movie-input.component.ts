import { Component, OnInit, Input } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { MoviesService } from '../../services/movies.service';

import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-input',
  templateUrl: './movie-input.component.html',
  styleUrls: ['./movie-input.component.css']
})
export class MovieInputComponent implements OnInit {

  @Input() movie: Movie;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute, private router: Router, private location: Location) {}

  ngOnInit() {
      this.route.params.forEach((params: Params) => {
          if (params['id'] !== undefined) {
              const id = parseInt(params['id'], 10);
              const movie = this.moviesService.getMovie(id);
              if (movie === undefined) {
                  this.router.navigateByUrl('/404');
              } else {
                  this.movie = movie;
              }
          }
      });
      if (this.movie === undefined) {
          this.movie = new Movie();
      }
  }

    private sendMovie(): void {
      if (this.movie.id === undefined) {
          this.moviesService.addMovie(this.movie);
      } else {
          this.moviesService.updateMovie(this.movie);
      }
      this.router.navigateByUrl('/movies');
    }

    private back(): void {
        this.location.back();
    }

}

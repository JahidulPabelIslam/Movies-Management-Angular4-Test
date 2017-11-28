import { Component, OnInit, Input } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { MoviesService } from '../../services/movies.service';

import { Movie } from '../../models/movie';
import {isUndefined} from "util";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie: Movie;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit() {
      this.route.params.forEach((params: Params) => {
          if (params['id'] !== undefined) {
              const movieId = parseInt(params['id'], 10);
              const movie = this.moviesService.getMovie(movieId);
              if (movie === undefined) {
                  this.router.navigateByUrl('/404');
              } else {
                  this.movie = movie;
              }
          }
      });
  }

    private back(): void {
        this.location.back();
    }

    private deleteMovie(): void {
        this.moviesService.removeMovie(this.movie.id);
        this.router.navigateByUrl('/movies');
    }

}

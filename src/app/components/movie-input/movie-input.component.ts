import { Component, OnInit, Input } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-input',
  templateUrl: './movie-input.component.html',
  styleUrls: ['./movie-input.component.css']
})
export class MovieInputComponent implements OnInit {

  @Input() movieId: number;
  @Input() movieName: String;
  @Input() movieGenre: String;
  @Input() movieYear: number;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute, private router: Router) {
      this.movieName = '';
      this.movieGenre = '';
      this.movieYear = 0;
  }

  ngOnInit() {
      this.route.params.forEach((params: Params) => {
          if (params['id'] !== undefined) {
              this.movieId = parseInt(params['id'], 10);
              const movie = this.moviesService.getMovie(this.movieId);
              this.movieName = movie.name;
              this.movieGenre = movie.genre;
              this.movieYear = movie.year;
          }
      });
  }

    private addMovie(): void {
        this.moviesService.addMovie(this.movieName, this.movieGenre, this.movieYear);
        this.router.navigateByUrl('/movies');
    }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieInputComponent } from './components/movie-input/movie-input.component';


import { MoviesService } from './services/movies.service';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const appRoutes: Routes = [
    { path: 'movie/:id/edit', component: MovieInputComponent },
    { path: 'movie/:id/view', component: MovieDetailComponent },
    { path: 'movie/add', component: MovieInputComponent },
    { path: 'movies', component: MoviesComponent },
    { path: '', redirectTo: '/movies', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieInputComponent,
    MovieDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieInputComponent } from './components/movie-input/movie-input.component';


import { MoviesService } from './services/movies.service';

const appRoutes: Routes = [
    { path: 'movie/:id/edit', component: MovieInputComponent },
    { path: 'movie/add', component: MovieInputComponent },
    { path: 'movies', component: MoviesComponent },
    { path: '', redirectTo: '/movies', pathMatch: 'full' },
    { path: '**', component: MoviesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieInputComponent
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

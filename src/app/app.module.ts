import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';


import { MoviesService } from './services/movies.service';

const appRoutes: Routes = [
    { path: 'movie/:id', component: MoviesComponent },
    {
        path: 'movies',
        component: MoviesComponent,
        data: { title: 'Movies List' }
    },
    { path: '',
        redirectTo: '/movies',
        pathMatch: 'full'
    },
    { path: '**', component: MoviesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { TrendingMovieComponent } from './trending-movie/trending-movie.component';
import { MoviesComponent } from './movies/movies.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { HomeComponent } from './home/home.component';
import { ForumComponent } from './forum/forum.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TrendingMovieComponent,
    MoviesComponent,
    SearchMovieComponent,
    HomeComponent,
    ForumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

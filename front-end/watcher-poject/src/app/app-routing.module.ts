import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { RegisterComponent } from './register/register.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { TrendingMovieComponent } from './trending-movie/trending-movie.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent},
  { path: 'trending', component: TrendingMovieComponent},
  { path: 'movie/:id', component: MoviesComponent},
  { path: 'search', component: SearchMovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

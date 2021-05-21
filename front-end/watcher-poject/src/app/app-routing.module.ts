import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumComponent } from './forum/forum.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { RegisterComponent } from './register/register.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { TrendingMovieComponent } from './trending-movie/trending-movie.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent},
  { path: 'trending', component: TrendingMovieComponent},
  { path: 'movie/:id', component: MoviesComponent},
  { path: 'search', component: SearchMovieComponent },
  { path: 'home', component: HomeComponent },
  { path: 'forum', component: ForumComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

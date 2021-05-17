import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-trending-movie',
  templateUrl: './trending-movie.component.html',
  styleUrls: ['./trending-movie.component.css']
})
export class TrendingMovieComponent{

  obsTrends : Observable<Object>;
  movieList : any;

  constructor(private trend: TrendingService) {
    this.obsTrends = this.trend.viewTrending();
    this.obsTrends.subscribe((data) => this.movieList = data)
  }

  /*showTrending() {
    this.obsTrends = this.trend.viewTrending();
    this.obsTrends.subscribe((data) => this.movieList = data)
  }*/

}

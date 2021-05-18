import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TrendingService } from '../trending.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-trending-movie',
  templateUrl: './trending-movie.component.html',
  styleUrls: ['./trending-movie.component.css']
})
export class TrendingMovieComponent{

  obsTrends : Observable<Object>;
  movieList : any;

  constructor(private trend: TrendingService, private sanitizer: DomSanitizer) {
    this.obsTrends = this.trend.viewTrending();
    this.obsTrends.subscribe((data) => this.movieList = data)
  }

  photoURL(urltoSanitize) {
    console.log(urltoSanitize);
    return this.sanitizer.bypassSecurityTrustUrl("https://image.tmdb.org/t/p/w500" + urltoSanitize);
  }
}

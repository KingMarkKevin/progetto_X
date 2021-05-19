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
  pages: number = 1;

  constructor(private trend: TrendingService, private sanitizer: DomSanitizer) {
    this.setPage(this.pages);
  }

  photoURL(urltoSanitize) {
    console.log(urltoSanitize);
    return this.sanitizer.bypassSecurityTrustUrl("https://image.tmdb.org/t/p/w500" + urltoSanitize);
  }

  setPage(num: number) {
    window.scroll(0,0);
    this.obsTrends = this.trend.viewTrending(num);
    this.obsTrends.subscribe((data) => this.movieList = data)
  }

  changePage(num: number) {
    this.pages = num;
    this.setPage(this.pages);
  }

  specificPage(num: HTMLInputElement) {
    this.pages = Number(num.value);
    this.setPage(this.pages);
  }

  modPage(num: number) {
    if (num == 1 && this.pages <= 999) {
      this.pages += 1;
    }
    else if (num == -1 && this.pages >= 2) {
      this.pages -= 1;
    }

    this.setPage(this.pages);
  }
}

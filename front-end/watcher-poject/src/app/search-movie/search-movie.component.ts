import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {
  query: string;
  obsMovies: Observable<Object>;
  result: any;
  pages: number = 1;

  constructor(private movies: TrendingService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {}

  submit(query: HTMLInputElement): void {
    if (!query.value) {
      return;
    }

    this.query = query.value;
    this.obsMovies = this.movies.searchMovie(this.query, 1);
    this.obsMovies.subscribe((data) => console.log(this.result = data));
    this.pages = 1;
  }

  photoURL(urltoSanitize) {
    return this.sanitizer.bypassSecurityTrustUrl("https://image.tmdb.org/t/p/w500" + urltoSanitize);
  }

  setPage(num: number) {
    window.scroll(0,0);
    this.obsMovies = this.movies.searchMovie(this.query, num);
    this.obsMovies.subscribe((data) => this.result = data)
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

  unavailable() {
    const url = "https://www.movienewz.com/img/films/poster-holder.jpg"
  }

}

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

  constructor(private movies: TrendingService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {}

  submit(query: HTMLInputElement): void {
    if (!query.value) {
      return;
    }

    this.query = query.value;
    this.obsMovies = this.movies.searchMovie(this.query);
    this.obsMovies.subscribe((data) => console.log(this.result = data));
  }

  photoURL(urltoSanitize) {
    return this.sanitizer.bypassSecurityTrustUrl("https://image.tmdb.org/t/p/w500" + urltoSanitize);
  }

}

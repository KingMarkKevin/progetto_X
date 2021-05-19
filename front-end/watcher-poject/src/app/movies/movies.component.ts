import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router, ParamMap } from '@angular/router'
import { Observable } from 'rxjs';
import { TrendingService } from '../trending.service';
import { HttpClient } from '@angular/common/http';
import { Conditional } from '@angular/compiler';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{

  routeObs: Observable<ParamMap>;
  movieServiceObs : Observable<Object>;
  obsMedia: Observable<Object>;

  movie: any;
  media: any;
  credits: any;

  idMovie: number;

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private movies: TrendingService,
    private sanitizer: DomSanitizer
    ) {}

  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) => {
    let movieId = params.get('id');
    let id : number = + movieId;
    this.idMovie = id;
    console.log(id);
    this.movies.getMovie(id).subscribe((data) => this.movie = data);
    this.movies.getTrailer(this.idMovie).subscribe((data) => this.media = data);
    this.movies.getCredits(this.idMovie).subscribe((data) => this.credits = data);
  }
  
  videoURL(urltoSanitize) {
    //console.log(urltoSanitize);
    //return this.sanitizer.bypassSecurityTrustUrl("https://www.youtube.com/watch?v=" + urltoSanitize);
    console.log(this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + urltoSanitize))
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + urltoSanitize);
  }

  photoURL(urltoSanitize) {
    return this.sanitizer.bypassSecurityTrustUrl("https://image.tmdb.org/t/p/w500" + urltoSanitize);
  }

}

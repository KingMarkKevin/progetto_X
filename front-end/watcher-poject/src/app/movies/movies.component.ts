import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router, ParamMap } from '@angular/router'
import { Observable } from 'rxjs';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{

  routeObs: Observable<ParamMap>;
  movieServiceObs : Observable<object>;
  obs: Observable<object>;
  movie: any;
  media: any;
  idMovie: number;

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private movies: TrendingService,
    private sanitizer: DomSanitizer
    ) {}

  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
    this.obs.subscribe(this.getTrailers);
  }

  getRouterParam = (params: ParamMap) => {
    let movieId = params.get('id');
    let id : number = +movieId;
    this.idMovie = id;
    console.log(movieId)
    //this.movieServiceObs = this.movies.getMovie(id);
    this.movies.getMovie(id).subscribe((data) => this.movie = data);
  }

  getTrailers() {
    this.movies.getTrailer(this.idMovie).subscribe((data) => console.log(this.media = data));
  }

  videoURL(urltoSanitize) {
    console.log(urltoSanitize);
    return this.sanitizer.bypassSecurityTrustUrl("https://www.youtube.com/watch?v=" + urltoSanitize);
  }

  photoURL(urltoSanitize) {
    return this.sanitizer.bypassSecurityTrustUrl("https://image.tmdb.org/t/p/w500" + urltoSanitize);
  }





}

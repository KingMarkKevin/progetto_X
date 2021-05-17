import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router'
import { Observable } from 'rxjs';
import { TrendingMovieComponent } from '../trending-movie/trending-movie.component';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{

  routeObs: Observable<ParamMap>;

  movie: any;

  constructor(private route: ActivatedRoute, private router: Router, private movies: TrendingService) {}

  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) => {
    let movieId = params.get('id');
    console.log(movieId)
  }





}

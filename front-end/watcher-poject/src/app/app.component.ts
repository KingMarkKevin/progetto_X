import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TrendingService } from './trending.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'watcher-poject';
  obsTrends : Observable<Object>;
  movieList : any;

  constructor(private trend: TrendingService) {}

  showTrending() {
    this.obsTrends = this.trend.viewTrending();
    this.obsTrends.subscribe((data) => this.movieList = data)
  }
}

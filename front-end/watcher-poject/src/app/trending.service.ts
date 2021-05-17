import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private http: HttpClient) { }

  viewTrending() {
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=9fe600e56e7db7f0ed935c6375a936fe&pages=1`
    let obsTrend = this.http.get(url);
    return obsTrend;
  }
}

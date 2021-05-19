import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  //api_key : string = {Authorization: environment.API_Key} 

  constructor(private http: HttpClient) { }

  viewTrending() {
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=9fe600e56e7db7f0ed935c6375a936fe&page=1`
    let obsTrend = this.http.get(url);
    return obsTrend;
  }

  getMovie(id: number) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=9fe600e56e7db7f0ed935c6375a936fe&language=en-US`
    let obsMovie = this.http.get(url);
    return obsMovie;
  }

  getTrailer(id: number) {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=9fe600e56e7db7f0ed935c6375a936fe&language=en-US`
    let obsTrailer = this.http.get(url);
    return obsTrailer;
  }
}

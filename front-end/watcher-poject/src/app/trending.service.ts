import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  //api_key : string = {Authorization: environment.API_Key} 

  constructor(private http: HttpClient) { }

  viewTrending(num: number) {
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=9fe600e56e7db7f0ed935c6375a936fe&page=${num}`
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

  searchMovie(query: string, num: number) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=9fe600e56e7db7f0ed935c6375a936fe&language=en-US&query=${query}&page=${num}&include_adult=false`
    let obsSearch = this.http.get(url);
    return obsSearch;
  }

  getCredits(id: number) {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=9fe600e56e7db7f0ed935c6375a936fe&language=en-US`
    let obsCredits = this.http.get(url)
    return obsCredits;
  }
}

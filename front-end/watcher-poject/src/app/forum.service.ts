import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private http: HttpClient) { }

  getTopics() {
    const url = `http://localhost:3000/topics/topic/all`
    let obsTrend = this.http.get(url);
    return obsTrend;
  }
}

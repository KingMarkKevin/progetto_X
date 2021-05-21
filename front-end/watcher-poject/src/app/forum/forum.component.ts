import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ForumService } from '../forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  forumObs: Observable<Object>;
  results: any;

  constructor(private forum: ForumService) { }

  ngOnInit(): void {
    this.loadTopics()
  }

  loadTopics() {
    this.forum.getTopics().subscribe((data) => this.results = data)
  }

}

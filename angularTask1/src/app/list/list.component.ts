import {Component, OnInit} from '@angular/core';
import {ListService, Post} from "../list.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  postsArray: Post[] = []

  constructor(private posts: ListService) {

  }

  ngOnInit(): void {
    this.posts.getPosts().subscribe((data) => {
        this.postsArray = data
      }
    )
  }
}

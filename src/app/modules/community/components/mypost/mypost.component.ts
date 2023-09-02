import { Component, OnInit } from '@angular/core';
import { Datum, Posts } from '../../models/posts.model';
import { DialogService } from 'primeng/dynamicdialog';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.scss'],
  providers: [DialogService],
})
export class MypostComponent implements OnInit {
  posts!: Datum[];
  constructor(private postService: PostService, private router: Router) {}
  ngOnInit(): void {
    this.getMyPosts();
  }

  viewPost(postId: number) {
    this.router.navigate(['community/', postId]);
  }

  getMyPosts() {
    this.postService.getAllPostByUserId().subscribe((result: Posts) => {
      this.posts = result.data;
    });
  }
}

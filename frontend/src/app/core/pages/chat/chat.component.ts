import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../shared/services/local-storage/local-storage.service';
import { Router } from '@angular/router';
import { PostsService } from '../../shared/services/posts/posts.service';
import { Observable } from 'rxjs';
import { PostDto } from '../../domain/dto/post.dto';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  public name = localStorage.getItem('name') as string;
  public posts$!: Observable<ReadonlyArray<PostDto>>;

  public form = this.fb.group({
    content: ['', [Validators.required]],
  });
  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly router: Router,
    private readonly postsService: PostsService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.postsService.loadPosts();
    this.posts$ = this.postsService.findAll();
  }

  logout() {
    this.localStorageService.remove('name');
    this.router.navigateByUrl('/login');
  }

  createPost(event: Event) {
    event.preventDefault();
    if (!this.form.valid) {
      return;
    }

    const { content } = this.form.value;
    this.postsService
      .createOne({
        id: '',
        content,
        title: this.name,
      })
      .subscribe();
    this.form.reset();
  }
}

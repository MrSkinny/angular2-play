import { Component } from '@angular/core';
import { AuthorService } from '../services/author.service';

@Component({
    selector: 'authors',
    template: `
    <h2>Authors</h2>
    <h3>{{title}}</h3>
    <ul>
      <li *ngFor="let author of authors">{{author}}</li>
    </ul>
    `,
    providers: [AuthorService]
})

export class AuthorsComponent {
  title = "A Good List of Authors";
  authors: string[];

  constructor(authorService: AuthorService){
    this.authors = authorService.getAuthors();
  }
}

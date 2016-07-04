import { Component } from '@angular/core';

@Component({
    selector: 'favorite',
    template: `
    <i 
      class="glyphicon"
      [class.glyphicon-star]="isFavorited"
      [class.glyphicon-star-empty]="!isFavorited"
      (click)="toggleFavorite()"></i>
    `,
    styles: [`
    
    `]
})

export class FavoriteComponent {
  isFavorited = false;

  toggleFavorite() {
    this.isFavorited = !this.isFavorited;
  }

}

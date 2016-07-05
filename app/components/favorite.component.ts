import { Component, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() isFavorited: boolean = false;

  @Output() change = new EventEmitter();

  toggleFavorite() {
    this.isFavorited = !this.isFavorited;
    this.change.emit({ newValue: this.isFavorited });
  }


}

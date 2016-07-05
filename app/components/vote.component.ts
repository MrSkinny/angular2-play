import { Component, Input } from '@angular/core';

@Component({
  selector: 'vote',
  template: `
    <div class="vote-component">
      <i class="glyphicon glyphicon-menu-up"></i>
      <span>{{voteCount}}</span>
      <i class="glyphicon glyphicon-menu-down"></i>
    </div>
  `,
  styles: [`
    .vote-component {
      width: 20px;
    }
  `]
})
export class VoteComponent {
  @Input() voteCount: number = 0;
}

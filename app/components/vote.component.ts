import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'vote',
  template: `
    <div class="vote-component">
      <i 
        (click)="upClick()" 
        [class.active-vote]="myVote === 1"
        class="glyphicon glyphicon-menu-up"
      ></i>
      <span>{{voteCount}}</span>
      <i 
        (click)="downClick()" 
        [class.active-vote]="myVote === -1"
        class="glyphicon glyphicon-menu-down"
      ></i>
    </div>
  `,
  styles: [`
    .vote-component {
      width: 20px;
    }

    .active-vote {
      color: orange;
    }

    .glyphicon {
      cursor: pointer;
    }
  `]
})
export class VoteComponent {
  @Input() myVote : number = 0;
  @Input() voteCount: number = 0;

  upClick() {
    if (this.myVote === 0) {
      this.myVote = 1;
      this.voteCount += this.myVote;
    } else {
      if (this.myVote === -1) {
        this.myVote = 0;
        this.voteCount++;
      }
    }
  }

  downClick() {
    if (this.myVote === 0) {
      this.myVote = -1;
      this.voteCount += this.myVote;
    } else {
      if (this.myVote === 1) {
        this.myVote = 0;
        this.voteCount--;
      }
    }
  }
}

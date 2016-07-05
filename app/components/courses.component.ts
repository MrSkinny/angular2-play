import { Component } from '@angular/core';
import { Course, CourseService } from '../services/course.service';
import { AutoGrowDirective } from '../directives/auto-grow.directive';
import { FavoriteComponent } from './favorite.component';
import { VoteComponent } from './vote.component';

interface IChangeFavorite {
  newValue: boolean;
}

interface IChangeVote {
  modelId: number;
  newValue: number;
}

@Component({
    selector: 'courses',
    template: `
    <h2>Courses</h2>
    <h3>{{title}}</h3>
    <input type="text" autoGrow />
    <div class="row" *ngFor="let course of courses">
      <div class="left-col">
        <vote
          [modelId]="course.id"
          [voteCount]="course.voteCount"
          [myVote]="myVote"
          (change)="onVoteChange($event)"
        ></vote>
      </div>
      <div class="right-col">
        {{course.name}}
        <favorite 
          [isFavorited]="" 
          (change)="onFavoriteChange($event)
        "></favorite>
      </div>
    </div>
    <div *ngFor="let course of courses">{{ course.name }} - {{ course.voteCount }}</div>
    `,
    providers: [CourseService],
    directives: [AutoGrowDirective, FavoriteComponent, VoteComponent],
    styles: [`
      .row {
        padding: 10px 0;
      }

      .left-col {
        display: inline-block;
      }

      .right-col {
        display: inline;
      }
    `]
})

export class CoursesComponent {
  courses: Course[];

  title = "The Courses For You:"
  voteCount = 10;
  myVote = 0;

  constructor(private courseService: CourseService){
    this.courses = this.courseService.getCourses();
  }

  onFavoriteChange($event : IChangeFavorite) {
    console.log($event.newValue);
  }

  onVoteChange($event: IChangeVote) {
    this.courseService.setCourseVote($event.modelId, $event.newValue);
  }

}

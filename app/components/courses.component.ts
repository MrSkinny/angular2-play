import { Component } from '@angular/core';
import { CourseService } from '../services/course.service';
import { AutoGrowDirective } from '../directives/auto-grow.directive';
import { FavoriteComponent } from './favorite.component';
import { VoteComponent } from './vote.component';

interface IChangeFavorite {
  newValue: boolean;
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
          [voteCount]="voteCount"
        ></vote>
      </div>
      <div class="right-col">
        {{course}}
        <favorite 
          [isFavorited]="" 
          (change)="onFavoriteChange($event)
        "></favorite>
      </div>
    </div>
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
  title = "The Courses For You:"
  courses: string[];
  voteCount = 10;

  constructor(courseService: CourseService){
    this.courses = courseService.getCourses();
  }

  onFavoriteChange($event : IChangeFavorite) {
    console.log($event.newValue);
  }

}

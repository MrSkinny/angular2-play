import { Component } from '@angular/core';
import { CourseService } from '../services/course.service';
import { AutoGrowDirective } from '../directives/auto-grow.directive';
import { FavoriteComponent } from './favorite.component';

@Component({
    selector: 'courses',
    template: `
    <h2>Courses</h2>
    <h3>{{title}}</h3>
    <input type="text" autoGrow />
    <ul>
      <li *ngFor="let course of courses">{{course}} <favorite></favorite></li>
    </ul>
    `,
    providers: [CourseService],
    directives: [AutoGrowDirective, FavoriteComponent]
})

export class CoursesComponent {
  title = "The Courses For You:"
  courses: string[];


  constructor(courseService: CourseService){
    this.courses = courseService.getCourses();
  }
}

import { Component } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
    selector: 'courses',
    template: `
    <h2>Courses</h2>
    <h3>{{title}}</h3>
    <ul>
      <li *ngFor="let course of courses">{{course}}</li>
    </ul>
    `,
    providers: [CourseService]
})

export class CoursesComponent {
  title = "The Courses For You:"
  courses: string[];

  constructor(courseService: CourseService){
    this.courses = courseService.getCourses();
  }
}

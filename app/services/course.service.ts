import { Injectable } from '@angular/core';

export interface Course {
  id: number;
  name: string;
  voteCount: number;
}

const courseFixtures : Course[] = [
      {
        id: 1,
        name: 'Course 1',
        voteCount: 5
      },
      {
        id: 2,
        name: 'Course 2',
        voteCount: 10
      },
      {
        id: 3,
        name: 'Course 3',
        voteCount: 21
      }
];

@Injectable()
export class CourseService {
  getCourses() : Course[] {
    return courseFixtures;
  }

  setCourseVote(courseId: number, voteCount: number) {
    let targetCourse = courseFixtures.find(course => course.id === courseId);
    if (targetCourse) targetCourse.voteCount = voteCount;
  }
}
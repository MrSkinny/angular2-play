import { Component } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>Udemy App</h1>
    <courses></courses>
    <authors></authors>
    `,
    directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent { }

import { Injectable } from '@angular/core';
import {Course} from './Course';
@Injectable()
export class CourseService {
private courselist:Course[];
  constructor() {
     this.courselist=[
       {image:"angular.png",coursename:"Angular 2",price:15000,duration:24},     
       {image:"react-js.png",coursename:"React JS",price:13000,duration:18},
       {image:"bs.png",coursename:"Bootstrap",price:12000,duration:14},
       {image:"ember.png",coursename:"Ember JS",price:22000,duration:34},
       {image:"html5.png",coursename:"HTML 5",price:12000,duration:14},
       {image:"java.png",coursename:"Core Java",price:22000,duration:34},
       {image:"nodejs.png",coursename:"Node JS",price:12000,duration:14},
       {image:"js.png",coursename:"Javascript",price:12000,duration:14},
       {image:"typescript.png",coursename:"Typescript",price:10000,duration:10}
      ];
   }

   getCourses():Course[]{
     return this.courselist;
   }
}

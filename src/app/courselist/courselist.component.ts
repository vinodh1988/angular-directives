import { Component, OnInit } from '@angular/core';
import {Course} from '../Course';
import { CourseService } from '../course.service';

@Component({
  selector: 'courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {
   courselist:Course[];
   cart:string[]=[];
   
  constructor(private cs:CourseService) {
   
   }

   getInfo(data:string){
      this.cart.push(data);
   }

  ngOnInit() {
     this.courselist=this.cs.getCourses();
  }

}

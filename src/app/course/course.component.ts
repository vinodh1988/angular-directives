import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import {Course} from '../Course';
@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

 @Input('coursedata') coursedata:Course;
 @Output('notifyParent') 
 notifyParent:EventEmitter<string>
 =new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  courseSelected(){
    this.notifyParent.emit(this.coursedata.coursename);
  }

}

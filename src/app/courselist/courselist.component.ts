import { Component, OnInit } from '@angular/core';
import {Course} from '../Course';
import { CourseService } from '../course.service';
import PubSub from 'pubsub-js';

@Component({
  selector: 'courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {
   courselist:Course[];
   cart:string[]=[];
   lang:string="English";
   
  constructor(private cs:CourseService) {
    
   }

   getInfo(data:string){
      this.cart.push(data);
   }
   langChange():void{
    // alert('lang is changed');
      PubSub.publish("langevent",this.lang);
   }

  ngOnInit() {
     this.courselist=this.cs.getCourses();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import {ReviewService} from '../../../review.service';

@Component({
  selector: 'reviewform',
  templateUrl: './reviewform.component.html',
  styleUrls: ['./reviewform.component.css']
})
export class ReviewformComponent implements OnInit {
   rvwForm:any;
  constructor(private formbuilder:FormBuilder,private rs:ReviewService) {
      
   }

  ngOnInit() {
     this.rvwForm=this.formbuilder.group({
      name:['',Validators.required],
      message:['',Validators.required],
      email:['',[Validators.required,
        Validators.pattern(
          "^[A-Za-z][A-Za-z_\.0-9]+@[A-Za-z]+[\.][A-Za-z]{2,5}$")]],
      course:['Java']
    });

  }

  saveReview(){
    var temp:any={
      name: this.rvwForm.value.name,
      email: this.rvwForm.value.email,
      course:this.rvwForm.value.course,
      message:this.rvwForm.value.message,
      reviewdate:new Date().toString()
    }
    this.rs.addReview(temp).subscribe(
      data=>alert('Your review is saved'),
      (error)=>alert('Not saved ---some Error')
    )
  }

}

import { Component, OnInit ,Input} from '@angular/core';
import {Review} from '../../../Review' ;
@Component({
  selector: 'reviewbox',
  templateUrl: './reviewbox.component.html',
  styleUrls: ['./reviewbox.component.css']
})
export class ReviewboxComponent implements OnInit {
  @Input('review') review:Review;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../review.service';
import {Review} from '../../Review';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
reviews:Review[];
  constructor(private rs:ReviewService) { }

  ngOnInit() {
    this.rs.getReviews().subscribe(
      (data)=>{this.reviews=data},
      (error)=>{alert('something went wrong')}
    );
  }

}

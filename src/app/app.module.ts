import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { MenuHeadComponent } from './menu-head/menu-head.component';
import { CourselistComponent } from './courselist/courselist.component';
import { CourseComponent } from './course/course.component';
import {CourseService} from './course.service';
import { OfficesComponent } from './routes/offices/offices.component';
import { EbooksComponent } from './routes/ebooks/ebooks.component';
import { VideosComponent } from './routes/videos/videos.component';
import { ReviewsComponent } from './routes/reviews/reviews.component';
import { ComplaintsComponent } from './routes/complaints/complaints.component';
import { RouterModule, Routes } from '@angular/router';

const routes=[
  {path:"",component: CourselistComponent},
  {path:"Offices",component: OfficesComponent},
  {path:"Ebooks",component: EbooksComponent},
  {path:"Videos",component: VideosComponent},
  {path:"Reviews",component: ReviewsComponent},
  {path:"Complaints", component: ComplaintsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuHeadComponent,
    CourselistComponent,
    CourseComponent,
    OfficesComponent,
    EbooksComponent,
    VideosComponent,
    ReviewsComponent,
    ComplaintsComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes)
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
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
import {HttpModule} from '@angular/http';
import {ReviewService} from './review.service';
import { ReviewboxComponent } from './routes/reviews/reviewbox/reviewbox.component';
import { ReviewformComponent } from './routes/reviews/reviewform/reviewform.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { DiscountPipe } from './pipes/discount.pipe';
import { SearchcoursePipe } from './pipes/searchcourse.pipe';
import { DiscountDirective } from './directives/discount.directive';
import { OfferComponent } from './offer/offer.component';
import { BannerDirective } from './directives/banner.directive';
import {DealdayService}from './dealday.service';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    ComplaintsComponent,
    ReviewboxComponent,
    ReviewformComponent,
    DiscountPipe,
    SearchcoursePipe,
    DiscountDirective,
    OfferComponent,
    BannerDirective
  ],
  imports: [
    BrowserModule,HttpModule, FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
  })
  ],
  providers: [CourseService,ReviewService,DealdayService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import {Review}  from './Review';

@Injectable()
export class ReviewService {
  headers:Headers;
  options:RequestOptions;

  constructor(private http:Http) { 
     this.headers = new Headers({ 'Content-Type': 'application/json', 
                                     'Accept': 'application/json' });
     this.options = new RequestOptions({ headers: this.headers });
  
  }
    addReview(param:any):Observable<any>{
     let body = JSON.stringify(param);
     let url="http://139.59.95.150:8898/rest-api/reviews";
     return this.http
        .post(url, body, this.options)
        .map(this.extractData)
        .catch(this.handleError);
  }

  getReviews():Observable<Review[]>{
    let url=
    "http://139.59.95.150:8898/rest-api/reviews";
    return this.http.get(url)
        .map(this.extractData)
        .catch(this.handleError);

  }


  private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :'Server error';
    
        return Observable.throw(errMsg);

    }
}

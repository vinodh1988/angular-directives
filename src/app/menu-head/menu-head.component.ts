import { Component, OnInit } from '@angular/core';
import PubSub from 'pubsub-js';
import {TranslateService} from '@ngx-translate/core'
@Component({
  selector: 'headbar',
  templateUrl: './menu-head.component.html',
  styleUrls: ['./menu-head.component.css']
})
export class MenuHeadComponent implements OnInit {
routes:string[]=[
   'Offices','Ebooks','Videos','Reviews','Complaints'];
  constructor(private translate:TranslateService) { 

  }
lang:string="English";
  ngOnInit() {
    this.translate.use(this.lang);
    PubSub.subscribe('langevent',(event,data)=>{
      alert(data);
      this.lang=data;
      this.translate.use(this.lang);
    });
  }

}

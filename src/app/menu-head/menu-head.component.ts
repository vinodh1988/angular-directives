import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'headbar',
  templateUrl: './menu-head.component.html',
  styleUrls: ['./menu-head.component.css']
})
export class MenuHeadComponent implements OnInit {
routes:string[]=[
   'Offices','Ebooks','Videos','Reviews','Complaints'];
  constructor() { }

  ngOnInit() {
  }

}

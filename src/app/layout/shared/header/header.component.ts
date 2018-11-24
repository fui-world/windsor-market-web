import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor() { }
    public links = [
      {
        page : '/home',
        name : 'Home'
      },
      {
        page : '/add-business',
        name : 'Add Business'
      },
      {
        page : '/shop',
        name : 'Shop'
      },
      {
        page : '/blog',
        name : 'Blog'
      },
      {
        page : '/event',
        name : 'Events'
      },
      {
        page : '/faqs',
        name : 'faqs'
      },
      {
        page : '/contact',
        name : 'contact'
      }
    ];

  ngOnInit() {
  }

}

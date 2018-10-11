import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public items = [
    {
      img: './assets/img/ic_news_feed.svg',
      text: 'Create your own personal news feed by choosing keywords from your favorite news sources'
    },
    {
      img: './assets/img/ic_follow.svg',
      text: 'Follow anything from presidential elections, celebrities, countries or companies - no subject is too narrow!'
    },
    {
      img: './assets/img/ic_save_time.svg',
      text: 'No need of spending hours on manually browsing the web and other news apps, we put everything into one place.'
    },
    {
      img: './assets/img/ic_wuy.svg',
      text: 'Welcome to We Update You - Giving you personalized news and keyword monitoring. Our job? To always keep you updated!'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

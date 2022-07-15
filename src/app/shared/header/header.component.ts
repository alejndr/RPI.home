import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IButtonConfig } from '../horizontal-button-list/horizontal-button-list.component';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  routeName?: string;
  buttons?: Array<IButtonConfig>;

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
    this.getRouteName();
    this.getButtons();
  }

  getButtons(){
    this.buttons = [
      {title: 'Home', route: ''},
      {title: 'CV', route: 'cv'},
    ]
  }

  getRouteName(){
    this.router.events.subscribe(res => {
      if (this.router.url == '/') {
        this.routeName = 'Home'
      } else {
        this.routeName = window.location.pathname.charAt(1).toUpperCase() + window.location.pathname.slice(2);
      }
      
    })
    
  }

}

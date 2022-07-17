import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IButtonConfig } from '../horizontal-button-list/horizontal-button-list.component';

@Component({
  selector: 'header-animated-waves',
  templateUrl: './header-animated-waves.component.html',
  styleUrls: ['./header-animated-waves.component.scss']
})
export class HeaderAnimatedWavesComponent implements OnInit {

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

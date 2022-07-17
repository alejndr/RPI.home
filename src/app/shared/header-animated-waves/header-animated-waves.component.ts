import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
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
      {title: 'Home', route: '', active: false},
      {title: 'CV', route: 'cv', active: false},
    ]
  }

  getRouteName(){
    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)).subscribe(res => {
      if (this.router.url == '/') {
        this.routeName = 'HOME'
      } else {
        this.routeName = window.location.pathname.slice(1).toUpperCase();
      }
      
    })
    
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';


export interface IButtonConfig {
  title: string;
  route: string;
  active: boolean;
}


@Component({
  selector: 'button-list',
  templateUrl: './horizontal-button-list.component.html',
  styleUrls: ['./horizontal-button-list.component.scss']
})
export class HorizontalButtonListComponent implements OnInit {
  
  @Input() buttons?: Array<IButtonConfig>;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.checkActiveRoute();
  }

  goTo(button: IButtonConfig){
    this.buttons?.forEach(element => { if (element.route != button.route) element.active = false });
    button.active = true
    this.router.navigateByUrl('/'+button.route);
  }

  checkActiveRoute(){
    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)).subscribe( res => {
      this.buttons?.forEach(element => {
        if (element.route === this.router.url.slice(1)) {
          element.active = true;
        }
      });
      
    })
  }

}

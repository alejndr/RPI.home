import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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
  }

  goTo(button: IButtonConfig){
    this.buttons?.forEach(element => { if (element.route != button.route) element.active = false });
    button.active = true
    this.router.navigateByUrl('/'+button.route);
  }

  checkActiveRoute(){
    //TODO algo con y el array de botones this.router.url
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export interface IButtonConfig {
  title: string;
  route: string;
}


@Component({
  selector: 'button-list',
  templateUrl: './horizontal-button-list.component.html',
  styleUrls: ['./horizontal-button-list.component.scss']
})
export class HorizontalButtonListComponent implements OnInit {
  
  @Input() buttons?: Array<IButtonConfig>;

  // Directions: row, col
  @Input() direction: string = 'row'

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  goTo(route: string){
    this.router.navigateByUrl('/'+route);
  }

}

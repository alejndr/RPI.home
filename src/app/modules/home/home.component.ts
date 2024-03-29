import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/core/animations/fadeIn';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // make fade in animation available to this component
  animations: [fadeInAnimation],

  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' },
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }

}

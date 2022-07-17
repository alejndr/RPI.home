import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/core/animations/fadeIn';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
  // make fade in animation available to this component
  animations: [fadeInAnimation],

  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' }
})
export class CvComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
    
  }

}
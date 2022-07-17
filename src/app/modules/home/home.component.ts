import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { first } from 'rxjs';
import { fadeInAnimation } from 'src/app/core/animations/fadeIn';
import { IAppState } from 'src/app/state/app.state';
import { selectUser } from 'src/app/state/user/user.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // make fade in animation available to this component
  animations: [fadeInAnimation],

  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' }
})
export class HomeComponent implements OnInit {

  

  constructor(
    private store: Store<IAppState>
  ) { }

  ngOnInit(): void {
    
  }

  loadUser(){
    this.store.select(selectUser).pipe(first()).subscribe(res => {
      let userData = {
        id: res.id,
        username: res.username,
        email: res.email
      } 
    })
  }

}

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, first } from 'rxjs';
import { IAppState } from './state/app.state';
import { setUser } from './state/user/user.actions';
import { IUser } from './state/user/user.models';
import { selectUser } from './state/user/user.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-pure';
  id: string | undefined;
  username: string | undefined;
  email: string | undefined;

  constructor(
    private store: Store<IAppState>
  ){}

  ngOnInit(): void {
    
    this.setUserData();
    this.loadUser();
  }

  setUserData(){
    let user: IUser = {
      id: '777',
      username: 'Alejndr',
      email: 'Alejndr.mv@gmail.com'
    }

    this.store.dispatch(setUser({ userInfo: user }));
  }

  loadUser(){
    this.store.select(selectUser).pipe(first()).subscribe(res => {
      this.id = res.id
      this.username = res.username
      this.email = res.email
      
    })
  }

}

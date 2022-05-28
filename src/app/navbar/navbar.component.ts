import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { throws } from 'assert';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public user: firebase.User | null = null;
  //user: Observable<firebase.User>;


  constructor(public auth: AngularFireAuth) {
    auth.authState.subscribe(user => this.user = user)
  }

  ngOnInit(): void {
  }

  logout() {
    this.auth.signOut();
  }
  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}

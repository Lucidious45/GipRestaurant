import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user$: Observable<firebase.User|null>
  constructor( public auth: AngularFireAuth) {
    this.user$ = auth.authState;
  }

  ngOnInit(): void {
  }

  logout() {
    return firebase.auth().signOut();

  }
  login() {
    return firebase.auth().signInWithPopup((new firebase.auth.GoogleAuthProvider()));
  }

}
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User|null>

  constructor(public auth: AngularFireAuth) { 
    this.user$ = auth.authState;
  }

  signout() {
    return firebase.auth().signOut();

  }
  signin() {
    return firebase.auth().signInWithPopup((new firebase.auth.GoogleAuthProvider()));
  }

}

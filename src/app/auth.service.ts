import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  loggedUser = {};
  constructor(private afauth: AngularFireAuth) { }

  canActivate(): boolean{
    console.log('CanActivate was called!');
    return true;
  }

  login(){
    this.afauth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
  }

  logout(){
    this.afauth.auth.signOut();
  }
}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class SessionUserService {

  constructor(
    private auth: AngularFireAuth
  ) { }

  signIn(email: string, password: string): Promise<firebase.auth.UserCredential> {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  signUp(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  logOut(): Promise<void> {
    return this.auth.signOut();
  }
}

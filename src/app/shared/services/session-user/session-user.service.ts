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

  signInEmail(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  signUpEmail(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  signInOrSignUpGoogle(): Promise<firebase.auth.UserCredential> {
    return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  sendResetPassword(email: string): Promise<void> {
    return this.auth.sendPasswordResetEmail(email);
  }

  logOut(): Promise<void> {
    return this.auth.signOut();
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth/';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: Observable<firebase.User>;
  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router,
    private afs: AngularFirestore
  ) {
    this.user = firebaseAuth.authState;
  }

  register(email: string, password: string, manager: string, team: string) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((value) => {
        console.log('successfully registered!');
        this.afs.doc(`users/${value.user.uid}`).set({
          email,
          manager,
          team,
        });
        console.log(value);
        this.router.navigate(['/login']);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  signIn(email: string, password: string) {
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((value) => {
        console.log(value);
      })
      .catch((err) => {
        console.log(err);
        if (err.code === 'auth/user-not-found') {
          alert('User Not Found');
        }
      });
  }

  signOut() {
    this.firebaseAuth.signOut();
  }
}

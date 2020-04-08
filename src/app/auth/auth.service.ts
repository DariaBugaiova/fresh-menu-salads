import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {
  token = '';

  constructor( private router: Router,
               private route: ActivatedRoute,
               private fbAuth: AngularFireAuth) {}

  signupUser(email: string, password: string) {
    this.fbAuth.auth.createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      );
  }

  signinUser(email: string, password: string) {
    this.fbAuth.auth.signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['menu'], { relativeTo: this.route });
          this.fbAuth.auth.currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            );
        })
      .catch(
        error => console.log(error)
      );
  }

  getToken() {
    return this.token;
  }

  isAuthenticated(): boolean {
    return this.token !== '';
  }

  logout() {
    this.fbAuth.auth.signOut().then(response => {
      console.log(response);
    })
      .catch(error => {
        console.log(error);
      });
    this.token = '';
  }
}

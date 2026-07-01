import { inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  user,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);

  user$ = user(this.auth);

  async register(fullName: string, email: string, password: string) {
    const credential = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );

    await updateProfile(credential.user, {
      displayName: fullName,
    });

    return credential.user;
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }
}
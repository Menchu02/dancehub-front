import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-register-step3',
  templateUrl: './register-step3.page.html',
  styleUrls: ['./register-step3.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton],
})
export class RegisterStep3Page {

  private router = inject(Router);

  createAccount(): void {
    this.router.navigate(['/tabs']);
  }

  goBack(): void {
    this.router.navigate(['/register-step2']);
  }

}

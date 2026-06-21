import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-register-step2',
  templateUrl: './register-step2.page.html',
  styleUrls: ['./register-step2.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton],
})
export class RegisterStep2Page {

  private router = inject(Router);

  goToStep3(): void {
    this.router.navigate(['/register-step3']);
  }

  goBack(): void {
    this.router.navigate(['/register-step1']);
  }

}

import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-register-step1',
  templateUrl: './register-step1.page.html',
  styleUrls: ['./register-step1.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton],
})
export class RegisterStep1Page {

  private router = inject(Router);

  goToStep2(): void {
    this.router.navigate(['/register-step2']);
  }

  goBack(): void {
    this.router.navigate(['/welcome']);
  }

}

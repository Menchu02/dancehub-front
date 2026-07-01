import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import {
  IonButton,
  IonContent,
  IonIcon,
  IonInput,
  IonText,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  chevronBack,
  eyeOffOutline,
  eyeOutline,
  lockClosedOutline,
  mailOutline,
  personOutline,
} from 'ionicons/icons';

interface Discipline {
  id: string;
  label: string;
}

@Component({
  selector: 'app-register-step1',
  templateUrl: './register-step1.page.html',
  styleUrls: ['./register-step1.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton, IonIcon, IonInput, IonText, ReactiveFormsModule],
})
export class RegisterStep1Page {
  private router = inject(Router);
  private fb = inject(FormBuilder); 
  private authService = inject(AuthService);

  disciplines: Discipline[] = [
    { id: 'bachata', label: 'Bachata' },
    { id: 'salsa', label: 'Salsa' },
    { id: 'kizomba', label: 'Kizomba' },
    { id: 'swing', label: 'Swing' },
    { id: 'sevillanas', label: 'Sevillanas' },
    { id: 'baile-urbano', label: 'Baile urbano' },
  ];

  selectedDisciplineIds: string[] = [];
  disciplinesTouched = false;
  showPassword = false;

  registerForm = this.fb.nonNullable.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  get fullName() {
    return this.registerForm.controls.fullName;
  }

  get email() {
    return this.registerForm.controls.email;
  }

  get password() {
    return this.registerForm.controls.password;
  }

  constructor() {
    addIcons({
      chevronBack,
      personOutline,
      mailOutline,
      lockClosedOutline,
      eyeOutline,
      eyeOffOutline,
    });
  }

  goToStep2(): void {
    this.disciplinesTouched = true;

    if (this.registerForm.invalid || this.selectedDisciplineIds.length === 0) {
      this.registerForm.markAllAsTouched();
      return;
    }

    console.log({
      ...this.registerForm.getRawValue(),
      disciplineIds: this.selectedDisciplineIds,
    });

    this.router.navigate(['/register-step2']);
  }

  goBack(): void {
    this.router.navigate(['/welcome']);
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleDiscipline(disciplineId: string): void {
    this.disciplinesTouched = true;

    if (this.isDisciplineSelected(disciplineId)) {
      this.selectedDisciplineIds = this.selectedDisciplineIds.filter(
        (id) => id !== disciplineId,
      );
      return;
    }

    this.selectedDisciplineIds = [...this.selectedDisciplineIds, disciplineId];
  }

  isDisciplineSelected(disciplineId: string): boolean {
    return this.selectedDisciplineIds.includes(disciplineId);
  }
}
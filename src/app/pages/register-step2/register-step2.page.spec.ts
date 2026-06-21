import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterStep2Page } from './register-step2.page';

describe('RegisterStep2Page', () => {
  let component: RegisterStep2Page;
  let fixture: ComponentFixture<RegisterStep2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterStep2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

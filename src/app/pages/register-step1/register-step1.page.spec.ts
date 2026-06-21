import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterStep1Page } from './register-step1.page';

describe('RegisterStep1Page', () => {
  let component: RegisterStep1Page;
  let fixture: ComponentFixture<RegisterStep1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterStep1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

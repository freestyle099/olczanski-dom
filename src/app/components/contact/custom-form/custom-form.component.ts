import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from 'components/button/button.component';
import { CustomInputComponent } from 'components/contact/custom-input/custom-input.component';
import { CustomTextareaComponent } from 'components/contact/custom-textarea/custom-textarea.component';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ContactService } from 'services/contact.service';

@Component({
  selector: 'app-custom-form',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ReactiveFormsModule, FormsModule, InputTextModule, CustomInputComponent, CustomTextareaComponent, ToastModule],
  templateUrl: './custom-form.component.html',
  styleUrl: './custom-form.component.scss',
  providers: [MessageService]
})
export class CustomFormComponent implements OnInit {
  private readonly contactService = inject(ContactService);
  private readonly fb = inject(FormBuilder);
  private readonly messageService = inject(MessageService);

  form: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      phoneNumber: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(15), Validators.pattern(/^(?:\+\d{9,15}|\d{9,15})$/)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]]
    });
  }

  sendEmail(): void {
    if (this.form.valid) {
      this.contactService.sendForm(this.form.value).subscribe(
        () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Sukces!',
            detail: 'Pomyślnie wysłano wiadomość! Dziękujemy!'
          });
          this.form.reset();
        },
        () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Błąd',
            detail: 'Nie udało się wysłać wiadomości, spróbuj ponownie później...'
          });
        }
      );
    } else {
      this.form.markAllAsTouched();
    }
  }

  formControl(name: string): FormControl {
    return this.form.get(name) as FormControl;
  }
}

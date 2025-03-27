import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidationMessages } from 'models';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { Textarea } from 'primeng/textarea';

@Component({
  selector: 'app-custom-textarea',
  standalone: true,
  imports: [CommonModule, InputTextModule, PaginatorModule, ReactiveFormsModule, Textarea],
  templateUrl: './custom-textarea.component.html',
  styleUrl: './custom-textarea.component.scss'
})
export class CustomTextareaComponent {
  @Input() name: string;
  @Input() placeholder?: string;
  @Input() type: 'text' | 'email' | 'number' = 'text';
  @Input() control: FormControl = new FormControl();
  @Input() label: string;

  protected readonly validationMessages = ValidationMessages;
  protected readonly Validators = Validators;
}

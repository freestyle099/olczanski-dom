import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidationMessages } from 'models';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputTextModule],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss'
})
export class CustomInputComponent {
  @Input() name: string;
  @Input() placeholder?: string;
  @Input() type: 'text' | 'email' | 'number' = 'text';
  @Input() control: FormControl = new FormControl();
  @Input() label: string;
  @Input() max: number = 100;
  @Input() min: number = 3;

  protected readonly validationMessages = ValidationMessages;
  protected readonly Validators = Validators;
}

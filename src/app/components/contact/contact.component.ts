import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CustomFormComponent } from 'components/contact/custom-form/custom-form.component';
import { SEO } from 'models';
import { RippleModule } from 'primeng/ripple';
import { SeoService } from 'services/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RippleModule, CustomFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.generateSEO(SEO.contact);
  }
}

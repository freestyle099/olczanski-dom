import { Component, Input } from '@angular/core';
import { About } from 'models';

@Component({
  selector: 'app-about-us',
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  @Input() allAbouts: About[] = [];
}

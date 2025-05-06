import { Component } from '@angular/core';
import { aboutUs } from 'consts';
import { About } from 'models';

@Component({
  selector: 'app-about-us',
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  allAbouts: About[] = aboutUs;
}

import { Component } from '@angular/core';
import { AboutUsComponent } from 'components/about-us/about-us.component';
import { HeaderComponent } from 'components/header/header.component';
import { HomeComponent } from 'components/home/home.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HomeComponent, AboutUsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'olczanski-dom';
}

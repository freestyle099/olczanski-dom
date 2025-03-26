import { Component } from '@angular/core';
import { AboutUsComponent } from 'components/about-us/about-us.component';
import { GalleryComponent } from 'components/gallery/gallery.component';
import { HeaderComponent } from 'components/header/header.component';
import { HomeComponent } from 'components/home/home.component';
import { LiveComponent } from 'components/live/live.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HomeComponent, AboutUsComponent, LiveComponent, GalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'olczanski-dom';
}

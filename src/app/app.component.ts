import { Component } from '@angular/core';
import { AboutUsComponent } from 'components/about-us/about-us.component';
import { BookComponent } from 'components/book/book.component';
import { ContactComponent } from 'components/contact/contact.component';
import { GalleryComponent } from 'components/gallery/gallery.component';
import { HeaderComponent } from 'components/header/header.component';
import { HomeComponent } from 'components/home/home.component';
import { LiveComponent } from 'components/live/live.component';
import { MapComponent } from 'components/map/map.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HomeComponent, AboutUsComponent, LiveComponent, GalleryComponent, ContactComponent, BookComponent, MapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'olczanski-dom';
}

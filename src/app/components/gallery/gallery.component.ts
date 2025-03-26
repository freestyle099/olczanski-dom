import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { galleryList } from 'consts';
import { GalleryImage } from 'models';
import { IAlbum, Lightbox, LightboxConfig, LightboxModule } from 'ngx-lightbox';

// Using IAlbum directly instead of creating a custom interface

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, LightboxModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  private lightbox = inject(Lightbox);
  private lightboxConfig = inject(LightboxConfig);
  private _images = signal<GalleryImage[]>(galleryList);
  protected readonly images: Signal<GalleryImage[]> = this._images.asReadonly();

  // Array for lightbox items
  protected lightboxImages: IAlbum[] = [];

  constructor() {
    this.lightboxConfig.disableScrolling = true;
    this.lightboxConfig.centerVertically = true;
    this.lightboxConfig.fitImageInViewPort = true;
    this.lightboxConfig.showImageNumberLabel = true;
    this.lightboxConfig.wrapAround = true;
    this.lightboxConfig.albumLabel = `Zdjęcie %1 z %2`;
    // this.lightboxConfig.positionFromTop = 50;
    // this.lightboxConfig.alwaysShowNavOnTouchDevices = true;
    // this.lightboxConfig.wrapAround = true;
  }

  ngOnInit(): void {
    // Transform gallery images to lightbox format
    this.lightboxImages = this.images().map((image) => ({
      src: image.src,
      caption: image.alt,
      thumb: image.src
    }));
  }

  openLightbox(index: number): void {
    console.log('XXX', this.lightboxImages);
    this.lightbox.open(this.lightboxImages, index);
  }

  closeLightbox(): void {
    this.lightbox.close();
  }
}

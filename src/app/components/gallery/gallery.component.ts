import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { galleryList } from 'consts';
import { GalleryImage } from 'models';
import { IAlbum, Lightbox, LightboxConfig, LightboxModule } from 'ngx-lightbox';

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

  protected lightboxImages: IAlbum[] = [];

  constructor() {
    this.lightboxConfig.disableScrolling = true;
    this.lightboxConfig.centerVertically = true;
    this.lightboxConfig.showImageNumberLabel = true;
    this.lightboxConfig.albumLabel = `Zdjęcie %1 z %2`;
  }

  ngOnInit(): void {
    this.lightboxImages = this.images().map((image) => ({
      src: image.src,
      caption: image.alt,
      thumb: image.thumbnail
    }));
  }

  openLightbox(index: number): void {
    this.lightbox.open(this.lightboxImages, index);
  }
}

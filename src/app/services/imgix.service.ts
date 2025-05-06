import { Injectable } from '@angular/core';
import { ImgixGalleryImage } from 'models';

@Injectable({ providedIn: 'root' })
export class ImgixService {
  private static URL: string = 'https://olczanski-dom-346386232.imgix.net';

  static generateGalleryObject(path: string): ImgixGalleryImage {
    return {
      src: this.generateSrc(path),
      webpSrcSet: this.generateSrcSet(path),
      thumbnail: this.generateThumbnail(path)
    };
  }

  static generateThumbnail(imageName: string): string {
    return `${this.URL}/${imageName}?ixembed=1722954096769&auto=format,compress&w=798`;
  }

  static generateSrc(imageName: string): string {
    return `${this.URL}/${imageName}?ixembed=1722954096769&auto=format,compress`;
  }

  static generateSrcSet(imageName: string): string {
    return `${this.URL}/${imageName}?auto=format,compress&w=380   380w,
    ${this.URL}/${imageName}?auto=format,compress&w=442   442w,
    ${this.URL}/${imageName}?auto=format,compress&w=512   512w,
    ${this.URL}/${imageName}?auto=format,compress&w=594   594w,
    ${this.URL}/${imageName}?auto=format,compress&w=688   688w,
    ${this.URL}/${imageName}?auto=format,compress&w=798   798w,
    ${this.URL}/${imageName}?auto=format,compress&w=926   926w,
    ${this.URL}/${imageName}?auto=format,compress&w=1074 1074w,
    ${this.URL}/${imageName}?auto=format,compress&w=1246 1246w,
    ${this.URL}/${imageName}?auto=format,compress&w=1446 1446w,
    ${this.URL}/${imageName}?auto=format,compress&w=1678 1678w,
    ${this.URL}/${imageName}?auto=format,compress&w=1946 1946w,
    ${this.URL}/${imageName}?auto=format,compress&w=2258 2258w`;
  }
}

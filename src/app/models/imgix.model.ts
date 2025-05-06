export interface ResponsiveImage {
  responsiveImage: Image;
}
export interface Image {
  webpSrcSet: string;
  src: string;
  alt: string;
}

export interface GalleryImage {
  thumbnail: string;
  alt: string;
  src: string;
  webpSrcSet: string;
}

export interface ImgixGalleryImage {
  thumbnail: string;
  src: string;
  webpSrcSet: string;
}

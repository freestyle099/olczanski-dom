import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { OG_SEO, SeoMeta } from 'models';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  generateSEO(seo: SeoMeta): void {
    this.title.setTitle(seo.title);
    this.meta.addTags([
      {
        name: 'og:title',
        content: seo.title
      },
      {
        name: 'description',
        content: seo.description
      },
      {
        name: 'og:description',
        content: seo.description
      },
      ...OG_SEO,
      {
        name: 'og:url',
        content: 'https://olczanska-kotlina.pl/'
      }
    ]);
  }

  generateSEOForSinglePage(title: string, description: string, slug: string): void {
    this.title.setTitle(`${title} | Olczańska-Kotlina.pl`);
    this.meta.updateTag({
      name: 'og:title',
      content: `${title} | Olczańska-Kotlina.pl`
    });
    this.meta.updateTag({
      name: 'description',
      content: description
    });
    this.meta.updateTag({
      name: 'og:description',
      content: description
    });
    this.meta.addTag({
      name: 'og:url',
      content: `https://olczanska-kotlina.pl/info/apartament/${slug}`
    });
  }
}

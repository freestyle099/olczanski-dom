import { MetaDefinition } from '@angular/platform-browser';

export interface SeoMeta {
  title: string;
  description: string;
}

export interface SEO_PAGES {
  home: SeoMeta;
  traditionalRooms: SeoMeta;
  apartAndRoom: SeoMeta;
  news: SeoMeta;
  contact: SeoMeta;
}

export const SEO: SEO_PAGES = {
  home: {
    title: 'Wynajem Pokoi i Apartamentów w Zakopanem - Olcza | Olczańska-Kotlina.pl',
    description:
      'Znajdź idealne miejsce na nocleg w Zakopanem w dzielnicy Olcza. Oferujemy komfortowe pokoje i apartamenty z pięknym widokiem na Tatry. Zaplanuj swoje wakacje już dziś!'
  },
  traditionalRooms: {
    title: 'Pokoje Tradycyjne | Apartamenty do Wynajęcia w Zakopanem - Oferta | Olczańska-Kotlina.pl',
    description:
      'Zobacz naszą bogatą ofertę apartamentów do wynajęcia w Zakopanem, w dzielnicy Olcza. Wybierz idealne miejsce na Twój pobyt w górach. Rezerwuj już teraz!'
  },
  apartAndRoom: {
    title: 'Apart&Room | Apartamenty do Wynajęcia w Zakopanem - Oferta | Olczańska-Kotlina.pl',
    description:
      'Zobacz naszą bogatą ofertę apartamentów do wynajęcia w Zakopanem, w dzielnicy Olcza. Wybierz idealne miejsce na Twój pobyt w górach. Rezerwuj już teraz!'
  },
  news: {
    title: 'Aktualności - Najnowsze informacje o Naszej Ofercie | Olczańska-Kotlina.pl',
    description:
      'Bądź na bieżąco z najnowszymi informacjami dotyczącymi naszej oferty wynajmu pokoi i apartamentów w Zakopanem, w dzielnicy Olcza. Ciekawe promocje i aktualności czekają!'
  },
  contact: {
    title: 'Kontakt - Skontaktuj się z Nami | Olczańska-Kotlina.pl',
    description:
      'Skontaktuj się z nami, aby dowiedzieć się więcej o naszej ofercie wynajmu pokoi i apartamentów w Zakopanem, w dzielnicy Olcza. Jesteśmy do Twojej dyspozycji, aby pomóc zorganizować Twój idealny pobyt.'
  }
};

export const OG_SEO: MetaDefinition[] = [
  {
    name: 'og:type',
    content: 'website'
  },
  {
    name: 'og:image',
    content: 'assets/logo-og.jpg'
  }
];

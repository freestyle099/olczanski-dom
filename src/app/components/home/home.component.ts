import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private readonly metaService = inject(Meta);
  private readonly titleService = inject(Title);

  ngOnInit(): void {
    this.titleService.setTitle('Olczański Dom - Komfortowe Noclegi w Zakopanem | Blisko Atrakcji Turystycznych');

    this.metaService.addTags([
      {
        name: 'description',
        content:
          'Olczański Dom oferuje komfortowe noclegi w Zakopanem blisko atrakcji turystycznych. Bezpłatny parking, WiFi, taras słoneczny. 2,4 km od wyciągu Pardałówka.'
      },
      {
        name: 'keywords',
        content: 'noclegi Zakopane, Olczański Dom, apartamenty w górach, tanie noclegi Zakopane, zakwaterowanie Tatry, pokoje do wynajęcia, wypoczynek w górach'
      },
      { property: 'og:title', content: 'Olczański Dom - Komfortowe Noclegi w Zakopanem | Blisko Atrakcji Turystycznych' },
      {
        property: 'og:description',
        content:
          'Olczański Dom oferuje komfortowe noclegi w Zakopanem blisko atrakcji turystycznych. Bezpłatny parking, WiFi, taras słoneczny. 2,4 km od wyciągu Pardałówka.'
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://olczanski-dom.pl/' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Olczański Dom' },
      { name: 'geo.region', content: 'PL-12' },
      { name: 'geo.placename', content: 'Zakopane' }
    ]);
  }
}

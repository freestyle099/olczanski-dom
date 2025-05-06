import { GalleryImage } from 'models';
import { ImgixService } from 'services/imgix.service';

export const galleryList: GalleryImage[] = [
  {
    ...ImgixService.generateGalleryObject('1.jpg'),
    alt: 'Olczański Dom - główny budynek pensjonatu w Zakopanem, widok z zewnątrz'
  },
  {
    ...ImgixService.generateGalleryObject('2.jpg'),
    alt: 'Przytulny pokój dwuosobowy z balkonem w Olczańskim Domu, Zakopane'
  },
  {
    ...ImgixService.generateGalleryObject('3.jpg'),
    alt: 'Przestronna łazienka z prysznicem w apartamencie Olczańskiego Domu'
  },
  {
    ...ImgixService.generateGalleryObject('4.jpg'),
    alt: 'Komfortowy salon z kominkiem w apartamencie rodzinnym, Olczański Dom'
  },
  {
    ...ImgixService.generateGalleryObject('5.jpg'),
    alt: 'Widok z okna na góry i panoramę Zakopanego, Olczański Dom na Olczy'
  },
  {
    ...ImgixService.generateGalleryObject('6.jpg'),
    alt: 'Kuchnia z pełnym wyposażeniem w apartamencie, Olczański Dom, Stachonie 24b'
  },
  {
    ...ImgixService.generateGalleryObject('7.jpg'),
    alt: 'Pokój trzyosobowy z drewnianymi elementami, w stylu góralskim, Olczański Dom'
  },
  {
    ...ImgixService.generateGalleryObject('8.jpg'),
    alt: 'Przytulna jadalnia z widokiem na Tatry w pensjonacie Olczański Dom'
  },
  {
    ...ImgixService.generateGalleryObject('9.jpg'),
    alt: 'Apartament rodzinny dla 5 osób z oddzielną sypialnią, Olczański Dom Zakopane'
  },
  {
    ...ImgixService.generateGalleryObject('10.jpg'),
    alt: 'Pokój dwuosobowy typu standard z łazienką w Olczańskim Domu, Olcza'
  },
  {
    ...ImgixService.generateGalleryObject('11.jpg'),
    alt: 'Taras z meblami ogrodowymi i widokiem na góry, Olczański Dom na Stachoniach'
  },
  {
    ...ImgixService.generateGalleryObject('12.jpg'),
    alt: 'Sypialnia małżeńska w apartamencie deluxe, Olczański Dom Zakopane'
  },
  {
    ...ImgixService.generateGalleryObject('13.jpg'),
    alt: 'Nowoczesna łazienka z wanną w pokoju typu superior, Olczański Dom'
  },
  {
    ...ImgixService.generateGalleryObject('14.jpg'),
    alt: 'Kącik wypoczynkowy w pokoju typu studio, Olczański Dom w Zakopanem'
  },
  {
    ...ImgixService.generateGalleryObject('15.jpg'),
    alt: 'Widok na Olczański Dom zimą, otoczony śniegiem w Zakopanem'
  },
  {
    ...ImgixService.generateGalleryObject('16.jpg'),
    alt: 'Aneks kuchenny w pokoju typu studio na parterze, Olczański Dom'
  },
  {
    ...ImgixService.generateGalleryObject('17.jpg'),
    alt: 'Przytulne łóżko małżeńskie z góralskimi detalami, Olczański Dom, Stachonie 24b'
  },
  {
    ...ImgixService.generateGalleryObject('18.jpg'),
    alt: 'Widok na parking i otoczenie pensjonatu Olczański Dom w Zakopanem'
  },
  {
    ...ImgixService.generateGalleryObject('19.jpg'),
    alt: 'Apartament rodzinny z rozkładaną sofą w salonie, Olczański Dom na Olczy'
  },
  {
    ...ImgixService.generateGalleryObject('20.jpg'),
    alt: 'Łóżka pojedyncze w pokoju trzyosobowym, idealne dla rodzin z dziećmi, Olczański Dom'
  },
  {
    ...ImgixService.generateGalleryObject('21.jpg'),
    alt: 'Widok z tarasu na panoramę Tatr i okolicę, Olczański Dom, Zakopane'
  },
  {
    ...ImgixService.generateGalleryObject('22.jpg'),
    alt: 'Wnętrze pensjonatu Olczański Dom z elementami wystroju góralskiego, Stachonie 24b'
  },
  {
    ...ImgixService.generateGalleryObject('23.jpg'),
    alt: 'Wejście do pensjonatu Olczański Dom z charakterystycznym szyldem, Zakopane Olcza'
  }
];

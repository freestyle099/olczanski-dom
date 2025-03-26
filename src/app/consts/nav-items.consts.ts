import { NavItem } from 'models';

export const NAV_ITEMS: NavItem[] = [
  {
    title: 'Strona główna',
    href: 'witamy'
  },
  {
    title: 'O nas',
    href: 'o-nas'
  },
  {
    title: 'Na żywo',
    href: 'na-zywo'
  },
  {
    title: 'Galeria',
    href: 'galeria'
  },
  {
    title: 'Kontakt',
    href: 'kontakt'
  }
] as const;

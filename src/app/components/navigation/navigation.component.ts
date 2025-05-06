import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NAV_ITEMS } from 'consts';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-navigation',
  imports: [NgClass, RouterLink, Button],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  isOpen: boolean = false;

  protected readonly navItems = NAV_ITEMS;

  toggleMenu(isOpen: boolean = false): void {
    this.isOpen = isOpen;
  }
}

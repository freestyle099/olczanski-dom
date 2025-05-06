import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, take, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollToTopService {
  constructor(
    private readonly router: Router,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  init() {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
        timer(0)
          .pipe(take(1))
          .subscribe(() => this.scrollToTop());
      });
    }
  }

  private scrollToTop() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}

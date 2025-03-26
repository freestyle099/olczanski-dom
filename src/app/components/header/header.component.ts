import { Component } from '@angular/core';
import { NavigationComponent } from 'components/navigation/navigation.component';
import { ImgixService } from 'services/imgix.service';

@Component({
  selector: 'app-header',
  imports: [NavigationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected readonly ImgixService = ImgixService;
}

import { Component, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { WeatherData } from 'models';
import { map } from 'rxjs';
import { LiveService } from 'services/live.service';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrl: './live.component.scss',
  standalone: true,
  imports: []
})
export class LiveComponent {
  private readonly liveService = inject(LiveService);
  protected readonly Math = Math;

  protected readonly weather: Signal<WeatherData> = toSignal(this.liveService.getWeather().pipe(map((data) => data)), {
    initialValue: {} as WeatherData
  });
  protected readonly Object = Object;
}

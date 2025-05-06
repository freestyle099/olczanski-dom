import { CommonModule } from '@angular/common';
import { Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-room-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-admin.component.html',
  styleUrl: './room-admin.component.scss'
})
export class RoomAdminComponent implements OnInit, DoCheck {
  @ViewChild('ref', { static: true }) iframe: ElementRef;
  private readonly _ID: string = 'reservation-form-096449c1b2a0b10b5d6d3a85b6603570';

  ngOnInit() {
    const raMessageReceiver = (event: MessageEvent) => {
      if (this.iframe) {
        if (!event.data.sender || this._ID !== event.data.sender) {
          return;
        }
        if (event.data.height) {
          this.iframe.nativeElement.style.height = event.data.height + 10 + 'px';
        }
        if (event.data.event && event.data.event.name === 'wi dg et.scrollup.requested') {
          try {
            this.iframe.nativeElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          } catch (e) {}
        }
      }
    };
    window.addEventListener('message', raMessageReceiver, false);

    this.iframe.nativeElement.addEventListener('load', this.setup);
  }

  setup() {
    this.iframe?.nativeElement?.contentWindow?.postMessage(
      {
        location: window.location.toString(),
        setup: {
          autoHeight: true,
          senderName: 'reservation-form-096449c1b2a0b10b5d6d3a85b6603570'
        }
      },
      '*'
    );
  }

  ngDoCheck() {
    this.setup();
  }
}

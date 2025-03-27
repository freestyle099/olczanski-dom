import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RoomAdminComponent } from 'components/room-admin/room-admin.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ImgixService } from 'services/imgix.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, ToastModule, ButtonModule, ConfirmDialogModule, RoomAdminComponent],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
  providers: [ConfirmationService, MessageService]
})
export class BookComponent {
  protected readonly ImgixService = ImgixService;
  private readonly confirmationService = inject(ConfirmationService);

  openDialog() {
    this.confirmationService.confirm({});
  }
}

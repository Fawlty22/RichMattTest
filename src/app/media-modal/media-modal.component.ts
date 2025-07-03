import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-media-modal',
  templateUrl: './media-modal.component.html',
  styleUrls: ['./media-modal.component.scss']
})
export class MediaModalComponent {
  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() title: string = '';
  @Input() description: string = '';

  isOpen = false;

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
}

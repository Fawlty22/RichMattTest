import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaModalComponent } from '../media-modal/media-modal.component';

@Component({
  selector: 'app-media-gallery',
  templateUrl: './media-gallery.component.html',
  styleUrls: ['./media-gallery.component.scss'],
  imports: [CommonModule, MediaModalComponent]
})
export class MediaGalleryComponent {
  @ViewChild('modal') modal!: MediaModalComponent;

  openModal(src: string, alt: string, title: string, description: string) {
    this.modal.src = src;
    this.modal.alt = alt;
    this.modal.title = title;
    this.modal.description = description;
    this.modal.open();
  }

  images = [
    {
      src: '/images/mountain-photo.webp',
      alt: 'Mountain Landscape',
      title: 'Mountain Environment',
      description: 'Realistic mountain environment with dynamic weather effects'
    },
    {
      src: '/images/summit-photo.webp',
      alt: 'Summit View',
      title: 'Summit View',
      description: 'Panoramic view from the mountain summit'
    },
    {
      src: '/images/skier-photo.webp',
      alt: 'Skier in Action',
      title: 'Skiing Mechanics',
      description: 'Physics-based skiing mechanics in action'
    }
  ];
}

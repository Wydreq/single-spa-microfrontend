import { Component, Input } from '@angular/core';

@Component({
  selector: 'add-event-image',
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent {
  @Input({ required: true }) url!: string;
}

import { Component, Input } from '@angular/core';

const IMAGES_LOCATION = '/assets/backgrounds';
const EXTENSION = '.avif';

@Component({
  selector: 'add-event-image',
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent {
  @Input({ required: true, transform: addPath }) name!: string;
}
function addPath(image: string) {
  return IMAGES_LOCATION.concat(image, EXTENSION);
}

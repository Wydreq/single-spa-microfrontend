import { Component, Input } from '@angular/core';

const IMAGES_LOCATION = '/assets/';
const EXTENSION = '.avif';

@Component({
  selector: 'add-event-images-section',
  templateUrl: './images-section.component.html',
  styleUrl: './images-section.component.scss',
})
export class ImagesSectionComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true, transform: addPath }) images: string[] = [];

  protected selectImage() {}
}
function addPath(images: string[]) {
  return images.map((image) => {
    return IMAGES_LOCATION.concat(image, EXTENSION);
  });
}

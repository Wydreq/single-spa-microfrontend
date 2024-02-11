import { Component, ViewChild } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { landscapesBck, petsBck, abstractBck } from './constants/backgrounds';

@Component({
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.scss',
})
export class AddEventComponent {
  @ViewChild(FormComponent) formComponent!: FormComponent;

  protected landscapesBck = this.appendCategory(landscapesBck, 'landscapes');
  protected petsBck = this.appendCategory(petsBck, 'pets');
  protected abstractBck = this.appendCategory(abstractBck, 'abstract');

  private appendCategory(images: string[], value: string) {
    return images.map((i) => value.concat(`/${i}`));
  }

  protected addEventHndler() {
    console.log(this.formComponent.form.value);
  }
}

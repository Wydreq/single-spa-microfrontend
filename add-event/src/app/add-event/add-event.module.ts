import { NgModule } from '@angular/core';
import { AddEventComponent } from './add-event.component';
import {
  NgbDatepickerModule,
  NgbTimepickerModule,
} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ImagesSectionComponent } from './components/images-section/images-section.component';
import { ImageComponent } from './components/image/image.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddEventComponent,
    FormComponent,
    ImagesSectionComponent,
    ImageComponent,
  ],
  imports: [
    CommonModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [AddEventComponent],
})
export class AddEventModule {}

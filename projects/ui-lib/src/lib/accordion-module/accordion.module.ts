import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { ToggleArrowModule } from '../toggle-arrow-module/toggle-arrow-module.module';

@NgModule({
  imports: [
    CommonModule,
    ToggleArrowModule
  ],
  declarations: [AccordionComponent],
  exports: [AccordionComponent]
})
export class AccordionModule {
}

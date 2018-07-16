import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CheckboxModule } from '../../../../projects/ui-lib/src/lib/checkbox-module/checkbox.module';
import { ButtonModule } from '../../../../projects/ui-lib/src/lib/button-module/button-module.module';
import { AccordionModule } from '../../../../projects/ui-lib/src/lib/accordion-module/accordion.module';

@NgModule({
  imports: [
    CommonModule,
    CheckboxModule,
    ButtonModule,
    AccordionModule,
  ],
  declarations: [CheckboxComponent],
  exports: [CheckboxComponent],
})
export class LibExamplesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StageComponent } from './stage/stage.component';
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
  declarations: [StageComponent],
  exports: [StageComponent],
})
export class StageModule { }

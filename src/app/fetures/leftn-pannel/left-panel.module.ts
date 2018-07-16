import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { AccordionModule } from '../../../../projects/ui-lib/src/lib/accordion-module/accordion.module';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule
  ],
  declarations: [LeftPanelComponent],
  exports: [LeftPanelComponent]
})
export class LeftPanelModule { }

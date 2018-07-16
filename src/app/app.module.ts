import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CheckboxModule } from '../../projects/ui-lib/src/lib/checkbox-module/checkbox.module';
import { ButtonModule } from '../../projects/ui-lib/src/lib/button-module/button-module.module';
import { LeftPanelModule } from './fetures/leftn-pannel/left-panel.module';
import { AccordionModule } from '../../projects/ui-lib/src/lib/accordion-module/accordion.module';


@NgModule({
  imports: [
    BrowserModule,
    CheckboxModule,
    ButtonModule,
    LeftPanelModule,
    AccordionModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

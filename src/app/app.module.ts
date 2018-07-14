import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CheckboxModule } from '../../projects/ui-lib/src/lib/checkbox-module/checkbox.module';

@NgModule({
  imports: [
    BrowserModule,
    CheckboxModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

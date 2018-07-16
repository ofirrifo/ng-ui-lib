import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LeftPanelModule } from './fetures/left-panel/left-panel.module';
import { StageModule } from './fetures/stage/stage.module';


@NgModule({
  imports: [
    BrowserModule,
    StageModule,
    LeftPanelModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';

import {AppComponent} from './app.component';
import {CustomDemoComponentComponent} from './custom-demo-component/custom-demo-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomDemoComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

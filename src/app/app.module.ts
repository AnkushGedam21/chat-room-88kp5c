import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {LayoutModule} from './layout/layout.module';



@NgModule({
  imports:      [LayoutModule],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

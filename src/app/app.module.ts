import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CalService} from './cal.service';

import { AppComponent } from './app.component';
import { CalDisplayComponent } from './cal-display/cal-display.component';
import { CalButtonComponent } from './cal-button/cal-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CalDisplayComponent,
    CalButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CalService],
  bootstrap: [AppComponent]
})
export class AppModule { }

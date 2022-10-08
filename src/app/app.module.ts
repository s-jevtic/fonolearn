import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IpaComponent } from './ipa/ipa.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PhoneDataService } from './phone-data.service';

@NgModule({
  declarations: [
    AppComponent,
    IpaComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

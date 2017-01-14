import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing'; 

import { HomeModule } from './routes/home/home.module';

import {HeaderModule} from './shared_components/header/header.module';
import {FooterModule} from './shared_components/footer/footer.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    HomeModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

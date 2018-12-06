// Import packages
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Import Routing
import { Routing } from './app.routing';


// Import Services
import { DummyService } from './services';


// Import Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    Routing
  ],
  providers: [
    DummyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

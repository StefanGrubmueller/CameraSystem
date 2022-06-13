import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {MainPageComponent} from './main-page/main-page.component';
import {BulbComponent} from './bulb/bulb.component';
import {TimeLapseComponent} from './time-lapse/time-lapse.component';
import {MatSliderModule} from "@angular/material/slider";
import {BrowserModule} from "@angular/platform-browser";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    BulbComponent,
    TimeLapseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatSliderModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

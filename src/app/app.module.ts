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
import {MatTabsModule} from "@angular/material/tabs";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
    MatTabsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

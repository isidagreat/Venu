import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VenuesComponent } from './venues/venues.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { LgnRegComponent } from './lgn-reg/lgn-reg.component';
import { SingleVenueComponent } from './single-venue/single-venue.component';
import { VenuMapViewComponent } from './venu-map-view/venu-map-view.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    VenuesComponent,
    LgnRegComponent,
    SingleVenueComponent,
    VenuMapViewComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

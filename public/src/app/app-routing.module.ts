import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VenuesComponent } from './venues/venues.component';
import { LgnRegComponent } from './lgn-reg/lgn-reg.component';
import { VenuMapViewComponent } from './venu-map-view/venu-map-view.component';
import { SingleVenueComponent } from './single-venue/single-venue.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component'

const routes: Routes = [
  {path: '', component: LgnRegComponent},
  {path: 'home/:metroid', component: VenuesComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'venue/:id', component:SingleVenueComponent},
  {path: 'map', component:VenuMapViewComponent},
  {path: 'profile', component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

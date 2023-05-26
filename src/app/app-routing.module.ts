import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverDetailsPageComponent } from './driver-details-page/driver-details-page.component';
import { IdentificationCardPageComponent } from './identification-card-page/identification-card-page.component';

const routes: Routes = [
  {path : 'driver', component: DriverDetailsPageComponent},
  {path : 'identification', component: IdentificationCardPageComponent},
  {path:'**', redirectTo: 'driver'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriverDetailsPageComponent } from './driver-details-page/driver-details-page.component';
import { IdentificationCardPageComponent } from './identification-card-page/identification-card-page.component';
import { FileSelectionComponent } from './file-selection/file-selection.component';
import { ExtensionPipePipe } from './extension-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DriverDetailsPageComponent,
    IdentificationCardPageComponent,
    FileSelectionComponent,
    ExtensionPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

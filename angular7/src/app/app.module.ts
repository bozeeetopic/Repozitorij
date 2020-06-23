import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { PlantdetailsComponent } from './plantdetails/plantdetails.component';
import { PlantdetailComponent } from './plantdetails/plantdetail/plantdetail.component';
import { PlantdetaillistComponent } from './plantdetails/plantdetaillist/plantdetaillist.component';
import { PlantdetailService } from './shared/plantdetail.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    PlantdetailsComponent,
    PlantdetailComponent,
    PlantdetaillistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [PlantdetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }

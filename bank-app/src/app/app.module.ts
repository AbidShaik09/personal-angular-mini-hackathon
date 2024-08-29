import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule

import { AppRoutingModule } from './app-routing.module.ts';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormInputComponent } from './form-input/form-input.component';
import { FormShowComponent } from './form-show/form-show.component';

@NgModule({
  declarations: [
    AppComponent,
    FormInputComponent,
    FormShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

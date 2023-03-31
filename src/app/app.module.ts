import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { UserDialogComponent } from './user-dialog/user-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDialogComponent,
  ],
  imports: [
    BrowserModule,
     HttpClientModule,
     ReactiveFormsModule,
     BrowserAnimationsModule,
     MatTableModule,
     MatButtonModule,
     MatDialogModule,
     MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { AssignmentComponent }  from './assignment.component';
import { AssignmentService } from './assignment.service';

@NgModule({
  imports: [     
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    ArticleComponent
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

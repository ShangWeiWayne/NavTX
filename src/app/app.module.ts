import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { ApppageoneComponent } from './apppageone/apppageone.component';
import { ApppagetwoComponent } from './apppagetwo/apppagetwo.component';

@NgModule({
   declarations: [
      AppComponent,
      ApppageoneComponent,
      ApppagetwoComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      BrowserAnimationsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

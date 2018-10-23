import { Routes } from '@angular/router';
import { ApppageoneComponent } from './apppageone/apppageone.component';
import { ApppagetwoComponent } from './apppagetwo/apppagetwo.component';
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
    { path: '', component: ApppageoneComponent , data: {depth: 1, name: 's0'}},
    { path: 'pone', component: ApppageoneComponent , data: {depth: 2, name: 's1'}},
    { path: 'ptwo', component: ApppagetwoComponent , data: {depth: 3, name: 's2'}},
    { path: '**', redirectTo: '', pathMatch: 'full'}
];

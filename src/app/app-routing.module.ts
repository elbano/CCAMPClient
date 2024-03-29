import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
   { path: '', redirectTo: 'main', pathMatch: 'full'}, // BETTER ROUTE NAME FOR THIS?
   { path: 'main', component: HomeComponent },
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [
      RouterModule
   ]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsalesComponent } from './addsales/newsales/newsales.component';


const routes: Routes = [
  //{ path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'newsales', component: NewsalesComponent  }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [NewsalesComponent]
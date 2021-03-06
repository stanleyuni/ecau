import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found';
import { IndexComponent } from './index/index';
import { PoliciesComponent } from './policies/policies';
import { ContactComponent } from './contact/contact';
import { ResourcesComponent } from './resources/resources';
import { JoinComponent } from './join/join';


const routes: Routes = [
  { 
    path: '', 
    component: IndexComponent, 
    data: { 
      title: 'Executive Council for Australian Unity (ECAU)'
    } 
  },
  { 
    path: 'policies', 
    component: PoliciesComponent,
    data: {
      title: 'ECAU - Policies'
    }
  },
  {
    path: 'resources',
    component: ResourcesComponent,
    data: {
      title: 'ECAU - Resources'
    }
  },
  {
    path: 'contact', 
    component: ContactComponent,
    data: {
      title: 'ECAU - Contact'
    }
  },
  {
    path: 'join', 
    component: JoinComponent,
    data: {
      title: 'ECAU - Join'
    }
  },
  { 
    path: '**', 
    component: NotFoundComponent, 
    data: { 
      title: 'ECAU - Page not found'
    } 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }

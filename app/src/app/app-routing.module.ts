import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { IndexComponent } from './index/index.component';
import { PoliciesComponent } from './policies/policies.component';
import { ContactComponent } from './contact/contact.component';

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
    path: 'contact', 
    component: ContactComponent,
    data: {
      title: 'ECAU - Contact'
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

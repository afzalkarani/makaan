import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyCardComponent } from './property/property-card/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list/property-list.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { PropertyDetailResolverService } from './property/property-detail/property-detail-resolver.service';

const routes: Routes = [
  {
    path: '', component: PropertyListComponent
  },
  {
    path: 'add-property', component: AddPropertyComponent
  },
  {
    path: 'rent-property', component: PropertyListComponent
  },
  {
    path: 'property-detail/:id', component: PropertyDetailComponent, resolve:
    {
      prp: PropertyDetailResolverService
    }
  },
  {
    path: 'user/login', component: UserLoginComponent
  },
  {
    path: 'user/register', component: UserRegisterComponent
  },
  {
    path: '**', component: PropertyListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

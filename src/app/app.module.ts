import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { HttpClientModule } from '@angular/common/http'
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { RouterModule } from '@angular/router';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component'
import { UserServiceService } from './services/user-service.service';
import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { TabsModule } from 'ngx-bootstrap/tabs'
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PropertyDetailResolverService } from './property/property-detail/property-detail-resolver.service';

import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    UserLoginComponent,
    UserRegisterComponent,
    FilterPipe,
    SortPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgbCarouselModule
  ],
  providers: [HousingService,
    UserServiceService,
    AlertifyService,
    AuthService,
    PropertyDetailResolverService, NgbCarouselConfig

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

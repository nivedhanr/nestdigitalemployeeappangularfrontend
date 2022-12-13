import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AddsecurityComponent } from './addsecurity/addsecurity.component';
import { SearchemployeeComponent } from './searchemployee/searchemployee.component';
import { SearchsecurityComponent } from './searchsecurity/searchsecurity.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavadminComponent } from './navadmin/navadmin.component';
import { Navadmin1Component } from './navadmin1/navadmin1.component';
import { Navadmin2Component } from './navadmin2/navadmin2.component';
import { DeleteempComponent } from './deleteemp/deleteemp.component'
const myRoute:Routes=[
  {
    path:"",
    component:AdminloginComponent
  },
  {
    path:"addemp",
    component:AddemployeeComponent
  },
  {
    path:"addsecurity",
    component:AddsecurityComponent
  },
  {
    path:"searchemp",
    component:SearchemployeeComponent
  },
  {path:"searchsecurity",
  component:SearchsecurityComponent
},
{
  path:"navadmin",
component:NavadminComponent
},
{
  path:"navadmin1",
  component:Navadmin1Component
},
{
  path:"navadmin2",
  component:Navadmin2Component
}


]
@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    AddemployeeComponent,
    AddsecurityComponent,
    SearchemployeeComponent,
    SearchsecurityComponent,
    NavadminComponent,
    Navadmin1Component,
    Navadmin2Component,
    DeleteempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

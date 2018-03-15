import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import firebase modules!
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
//wtf
import { AppComponent } from './app.component';
//Components imports [Employees (1.Employee, 2.EmployeeList)] 
//Employees is the father component of Employee and EmployeeList
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
//Angular Form module import
import { FormsModule } from '@angular/forms';
//Enviroment component import (the firebase config)
import { environment } from '../environments/environment';
//Toastr Import (Source from NPM Package)
// npm install ngx-toastr --save
import { ToastrModule } from 'ngx-toastr';
//*************************************************************************** */

@NgModule({
  declarations: [
    //Do not forget to import ANY Component
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    //initializing Firebase with Environment firebase configs
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    //Toastr is a npm package which helps to show notification inside angular
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

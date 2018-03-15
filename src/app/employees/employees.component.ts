import { Component, OnInit } from '@angular/core';
//importing service class
import {EmployeeService} from './shared/employee.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  //class provider of services
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {
  //Injection of service to Component
  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
  }

}

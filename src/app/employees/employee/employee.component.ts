import { Component, OnInit } from '@angular/core';
//same at employees
import {EmployeeService} from '../shared/employee.service';
import { NgForm } from '@angular/forms';
//importing Toastr
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService : EmployeeService,
  //toastr object must be declared on constructor in order to show the Popups!
  private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(employeeForm : NgForm){
    if(employeeForm.value.$key == null){
    this.employeeService.insertEmployee(employeeForm.value);
    this.toastr.success('Submitted Successfully!', 'Employee Registred!')
    }else{
    this.employeeService.updateEmployee(employeeForm.value);
    this.resetForm();
    this.toastr.info('Updated Successfully!', 'Employee Edited!');
    }
  }

  resetForm(employeeForm?: NgForm){
    // ? mark is telling to Angular employeeForm argument is OPTIONAL
    if (employeeForm != null){
    employeeForm.reset();
    }
    this.employeeService.selectedEmployee = {
      $key : null,
      name : '',
      position : '',
      office : '',
      salary : 0,
      
    }
  }

}

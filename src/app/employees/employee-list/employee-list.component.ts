import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../shared/employee.service';
//importing the model
import { Employee } from '../shared/employee.model';
//importing ngx-toastr
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  //employeeList consists of an array holding each attribute
  //this array will be populated and later on be displayed on the view
  //But... (See ngOnInit comment!)
  employeeList : Employee[]

  //same at employee
  constructor(private employeeService : EmployeeService, private toastr : ToastrService) { }

  //...The array is an Employee type, and the fetched Data is AngularFireList!
  //To fix this problem, use a temporary variable which holds the Firebase Data...
  //After that, auxData will Listen to any changes may occur with the Firebase Data
  //Then, item parameter holds every information on the specified Employee
  ngOnInit() {
    var auxData = this.employeeService.getData();
    auxData.snapshotChanges().subscribe(item => {
      //employee is instatiated as empty array
      this.employeeList = [];
      //for each 'element' convert to json
      //and specify the key
      //!!!*** FINALLY PUSH THE JSON TO EMPLOYEE MODEL CLASS ***!!!
      item.forEach(element => {
        var jsonData = element.payload.toJSON();
        jsonData["$key"] = element.key;
        this.employeeList.push(jsonData as Employee);
      });
    });
  }

  onEdit(employee : Employee){
    //A copy of employee object must be assigned(assign) to selectedEmployee
    //this operation must be asyncronous, else could cause performance impact on entire aplication
    // Syncronous e.g: this.employeeService.selectedEmployee = employee;
    this.employeeService.selectedEmployee = Object.assign({},employee);
  }

  onDelete(key : string){
  //don`t forget to assign #$key="ngModel" to the hidden input
  if(confirm('Are you sure to delete this record? This action cannot be undone!') == true){
    this.employeeService.deleteEmployee(key);
    this.toastr.warning("Removed Successfully!", "Employee Deleted!");
    }
  }

}//class

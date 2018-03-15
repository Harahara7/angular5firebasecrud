import { Injectable } from '@angular/core';

//Importing the Employee model class
import { Employee } from './employee.model';
//Importing the Angular Service Modules
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class EmployeeService {
  //list of ANY type
  employeeList: AngularFireList<any>;
  //creating a new object called Employee
  selectedEmployee: Employee = new Employee();
  //MUST inject via Constructor the AngularFireDatabase!
  constructor(private firebase : AngularFireDatabase) { }

  //Method to Send the employeeList JSON to Firebase
  getData(){
    this.employeeList = this.firebase.list('employees');
    return this.employeeList;
  }
  //method to push each employee
  insertEmployee(employee: Employee)
  {
    //the respective elements desirable to be pushed to FBase
    //This is JSON format
    this.employeeList.push({
      name: employee.name,
      position: employee.position,
      office: employee.office,
      salary: employee.salary
    });
    
  }

  //update method to Alter existing employees
  updateEmployee(employee : Employee){
    //in order to update the following employee
    //the $key must be informed to track the Row during operation
    this.employeeList.update(employee.$key,
    {
      name: employee.name,
      position: employee.position,
      office: employee.office,
      salary: employee.salary
    });
  }
  //Delete method to remove an employee
  //Same as above, $key must be specified!
  deleteEmployee($key : string){
    this.employeeList.remove($key);
  }

}//class

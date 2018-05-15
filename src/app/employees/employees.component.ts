import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './shared/employee.service';
import {Employee} from './shared/employee.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  employeeList: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployeesFromFireBase();
  }

  getEmployeesFromFireBase() {
    /*use var*/
    let x = this.employeeService.getData();
    /*to convert angularfirelist to employee array*/
    x.snapshotChanges().subscribe(item => {
      /*initialize employee array*/
      this.employeeList = [];
      item.forEach(element => {
        /*will detain json object containing the values in it(name, office, position)*/
        let y = element.payload.toJSON();
        /*to get firebase database key*/
        y['$key'] = element.key;
        this.employeeList.push(y as Employee);
      });
    });
  }


}

import {Component, Input, OnInit} from '@angular/core';
import {EmployeeService} from '../shared/employee.service';
import {Employee} from '../shared/employee.model';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  @Input() employeeList;

  constructor(private employeeService: EmployeeService, private toaster: ToastrService) {
  }

  ngOnInit() {}

  onEdit(emp: Employee) {
    this.employeeService.selectedEmployee = Object.assign({}, emp);
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') === true) {
      this.employeeService.deleteEmployee(key);
      this.toaster.warning('Deleted Successfully', 'Employee Register');
    }
  }
}

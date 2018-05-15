import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../shared/employee.service';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(employeeForm: NgForm) {
    if (employeeForm.value.$key == null) {
      this.employeeService.insertEmployee(employeeForm.value);
    } else {
      this.employeeService.updateEmployee(employeeForm.value);
    }
    this.resetForm(employeeForm);
    this.toastr.success('Submitted Succesfully', 'Employee Register');
  }

  /*wanneer je in onInit je resetform method roept heeft je employeeFor van de type Ngform geen value
  daarom gaan we die employeeform parameter nullable maken door een "?" erachter te plaatsen,
  want je wilt die reset form niet roepen wanneer je employeefrom al null is, dus je maakt die parameter optioneel*/
  resetForm(employeeForm?: NgForm) {
    if (employeeForm != null) {
      employeeForm.reset();
    }
    this.employeeService.selectedEmployee = {
      $key: null,
      name: '',
      position: '',
      office: '',
      salary: 0
    };
  }

}

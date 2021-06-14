import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../service/user.service";
import {RoleService} from "../../../service/role.service";
import {AddressService} from "../../../service/address.service";
import {Employee} from "../../../model/employee/employee";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  updateUserForm: FormGroup;
  employee: Employee;
  userId: any;
  roles:any;
  address:any;

  constructor(private formBuilder: FormBuilder, private userService:UserService, private roleService:RoleService, private addressService:AddressService , private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.recupData();
    this.recupAddress();
    this.recupRole();

    setTimeout(() => {
      this.form();
    }, 1000);
  }

  form(){
    this.updateUserForm = this.formBuilder.group({
      userId: [this.employee.userId],
      mail: [this.employee.mail, [Validators.required, Validators.email]],
      password: [this.employee.password, Validators.required],
      userDateOfBirth: [this.employee.userDateOfBirth, Validators.required],
      userEntryDate: [this.employee.userEntryDate, Validators.required],
      userLastname: [this.employee.userLastname, Validators.required],
      userName: [this.employee.userName, Validators.required],
      userNss: [this.employee.userNss, Validators.required],
      userPhone: [this.employee.userPhone, Validators.required],
      userUsername: [this.employee.userUsername, Validators.required],
      addressId: this.formBuilder.group({
        addressNumber: [this.employee.addressId?.addressNumber],
        addressStreet: [this.employee.addressId?.addressStreet, Validators.required],
        addressCity: [this.employee.addressId?.addressCity, Validators.required],
        addressCountry: [this.employee.addressId?.addressCountry, Validators.required]
      }),
      roleId: this.formBuilder.group({
        roleType: [this.employee.roleId?.roleType, Validators.required]
      })
    })
  }

  recupData() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.userId = this.userService.findById(this.userId).subscribe(
      (user) => {
        this.employee = user;
      },
      (error) => {
        console.log("error = " + error.message);
      }
    );
  }

  recupRole() {
    this.roles = this.roleService.findAll().subscribe(
      (roles: any) => {
        this.roles = roles;
      },
      (error: { message: string; }) => {
        console.log("error = " + error.message);
      }
    );
  }

  recupAddress() {
    this.address = this.addressService.findAll().subscribe(
      (address: any) => {
        this.address = address;
      },
      (error: { message: string; }) => {
        console.log("error = " + error.message);
      }
    );
  }

  onSubmit() {
    const data = this.updateUserForm.value;
    this.userService.update(this.userId, data);
  }
}

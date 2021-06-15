import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../service/user.service";
import {RoleService} from "../../../service/role.service";
import {AddressService} from "../../../service/address.service";
import {Employee} from "../../../model/employee/employee";
import {Adresse} from "../../../model/adresse/adresse";
import {Role} from "../../../model/role/role";

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
  addressModel: Adresse;
  roleModel: Role;

  constructor(private formBuilder: FormBuilder, private userService:UserService, private roleService:RoleService, private addressService:AddressService , private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.recupData();
    this.recupRole();

    setTimeout(() => {
      this.form();
    }, 100);
  }

  form(){
    this.updateUserForm = this.formBuilder.group({
      userId: [this.employee.userId, Validators.required],
      userMail: [this.employee.userMail, [Validators.required, Validators.email]],
      userPassword: [this.employee.userPassword, Validators.required],
      userDateOfBirth: [this.employee.userDateOfBirth, Validators.required],
      userEntryDate: [this.employee.userEntryDate, Validators.required],
      userLastname: [this.employee.userLastname, Validators.required],
      nameUser: [this.employee.nameUser, Validators.required],
      userNss: [this.employee.userNss, Validators.required],
      userPhone: [this.employee.userPhone, Validators.required],
      userUsername: [this.employee.userUsername, Validators.required],
      roleId: [this.employee.role.roleId, Validators.required],
      address: this.formBuilder.group({
        addressId: [this.employee.address.addressId],
        addressNumber: [this.employee.address.addressNumber, Validators.required],
        addressStreet: [this.employee.address.addressStreet, Validators.required],
        addressCity: [this.employee.address.addressCity, Validators.required],
        addressCountry: [this.employee.address.addressCountry, Validators.required]
      })
    })
  }

  recupData() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.userService.findById(this.userId).subscribe(
      (user) => {
        console.log(user);
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

  recupRoleById(id: string | null) {
    this.roleService.findById(id).subscribe(
      (roles: any) => {
        console.log(roles)
        this.roles = roles;
      },
      error => {
        console.log("error=" + error.message);
      }
    );
  }

  fillAdressModel(data: { address: any }) {
    this.addressModel =  {
      addressId: data.address.addressId,
      addressNumber: data.address.addressNumber,
      addressStreet: data.address.addressStreet,
      addressCity: data.address.addressCity,
      addressCountry: data.address.addressCountry,
    }
  }

  fillRoleModel() {
    this.roleModel = {
      roleId: this.roles.roleId,
      roleType: this.roles.roleType
    }
  }

  fillEmployeeModel(data: any) {
    this.employee = {
      userId: data.userId,
      userMail: data.userMail,
      userPassword: data.userPassword,
      userDateOfBirth: data.userDateOfBirth,
      userEntryDate: data.userEntryDate,
      userLastname: data.userLastname,
      nameUser: data.nameUser,
      userNss: data.userNss,
      userPhone: data.userPhone,
      userUsername: data.userUsername,
      address: this.addressModel,
      role: this.roleModel
    }

    this.userService.update(this.employee);
  }

  onSubmit() {
    const data = this.updateUserForm.value;

    this.recupRoleById(data.roleId);

    this.fillAdressModel(data);

    setTimeout(() => {
      this.fillRoleModel();
    }, 500);

    setTimeout(() => {
      this.fillEmployeeModel(data);
    }, 1000);
  }
}

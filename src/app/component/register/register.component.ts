import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/user/user";
import {UserService} from "../../service/user.service";
import {RoleService} from "../../service/role.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  addUserForm: FormGroup;
  user: User;
  roles: any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private formBuilder: FormBuilder,private userService: UserService, private roleService: RoleService) { }

  ngOnInit(): void {
    this.recupRole();
    this.addUserForm = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      userDateOfBirth: ['', Validators.required],
      userEntryDate: ['', Validators.required],
      userLastname: ['', Validators.required],
      userName: ['', Validators.required],
      userNss: ['', Validators.required],
      userPhone: ['', Validators.required],
      userUsername: ['', Validators.required],
      addressId: ['', Validators.required],
      roleId: ['', Validators.required]
    });
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
  onSubmit(): void {
    const data = this.addUserForm.value;
    this.user = {
      mail: data.mail,
      password: data.password,
      userDateOfBirth: data.userDateOfBirth,
      userEntryDate: data.userEntryDate,
      userLastname: data.userLastname,
      userName: data.userName,
      userNss: data.userNss,
      userPhone: data.userPhone,
      userUsername: data.userUsername,
      addressId: parseInt(data.addressId),
      roleId: parseInt(data.roleId)
    }

    this.userService.add(this.user);
  }
}

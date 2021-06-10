import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/user/user";
import {UserService} from "../../service/user.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  addUserForm: FormGroup;
  user: User;

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private formBuilder: FormBuilder,private userService: UserService) { }

  ngOnInit(): void {
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

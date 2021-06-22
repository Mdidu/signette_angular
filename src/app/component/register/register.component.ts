import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/user/user";
import {UserService} from "../../service/user.service";
import {Adresse} from "../../model/adresse/adresse";
import {AddressService} from "../../service/address.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  addUserForm: FormGroup;
  user: User;
  address: Adresse;
  roleId: any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private addressService: AddressService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.form();
    }, 1000);
  }

  form() {
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
      addressGroup: this.formBuilder.group({
        addressNumber: ['', Validators.required],
        addressStreet: ['', Validators.required],
        addressCity: ['', Validators.required],
        addressCountry: ['', Validators.required]
      })
    });
  }

  addAddress(address: Adresse) {
    this.addressService.add(address).subscribe(
      (adresse: Adresse)=>{
        this.address = adresse;
      });
  }

  onSubmit(): void {
    const data = this.addUserForm.value;
    this.roleId =  this.route.snapshot.paramMap.get('id');

    this.address = {
      addressNumber: data.addressGroup.addressNumber,
      addressStreet: data.addressGroup.addressStreet,
      addressCity: data.addressGroup.addressCity,
      addressCountry: data.addressGroup.addressCountry
    }

    this.addAddress(this.address);

    setTimeout(() => {
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
        addressId: this.address.addressId,
        roleId: this.roleId
      }

      this.userService.add(this.user);
    }, 1000);

  }
}

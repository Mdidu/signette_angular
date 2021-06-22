import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  searchUserLastnameForm: FormGroup;
  users: any;
  roleId: any;
  title: string;

  constructor(private formBuilder: FormBuilder,
              public userService: UserService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.roleId = this.route.snapshot.paramMap.get('id');
    this.title = (this.roleId === '1' ? "Animateurs": (this.roleId === '2' ? "Employees" : "Admins" ));
    this.form();
    this.displayUser();
  }

  form() {
    this.searchUserLastnameForm = this.formBuilder.group( {
      userLastname: ['', Validators.required]
    });
  }

  displayUser() {
    this.users = this.userService.findByRoleId(this.roleId).subscribe(
      (users) => {
        this.users = users;
        console.log(this.users)
      },
      (error) => {
        console.log('error=' + error.message);
      }
    );
  }

  onRemoveUser(id: number) {
    this.userService.remove(id);

    setTimeout(
      () => {
        this.displayUser();
      }, 1000);
  }

  detailUser(id: number) {
    this.router.navigate(['/user/', id]);
  }

  onSubmit() {
    const data = this.searchUserLastnameForm.value;
    if (data.userLastname !== '') {
      this.userService.findByLastNameByRole(data.userLastname,this.roleId).subscribe(
        (users) => {
         this.users = users;
       },
       (error) => {
         console.log('errors=' + error.message);
       }
     );
   } else {
      this.displayUser();
    }
  }
}

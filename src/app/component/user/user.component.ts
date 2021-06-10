import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any;

  constructor(private formBuilder: FormBuilder, public userService: UserService, private router: Router) {
    this.displayUser();
  }

  ngOnInit(): void {
  }

  displayUser() {
    this.users = this.userService.findAll().subscribe(
      (users) => {
        this.users = users;
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

  updateUser(id: number) {
    this.router.navigate(['/user/update/', id]);
  }

  detailUser(id: number) {
    this.router.navigate(['/user/', id]);
  }
}

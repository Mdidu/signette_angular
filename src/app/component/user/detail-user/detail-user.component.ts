import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/user/user";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../service/user.service";
import {Employee} from "../../../model/employee/employee";

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {

  user: Employee;
  userId: number;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recupData();
  }

  recupData() {
    this.userId = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.userService.findById(this.userId).subscribe(
      (user) => {
        this.user = user;
      },
      (error) => {
        console.log('error = ' + error.message);
      }
    );
  }
}

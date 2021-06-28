import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../service/token-storage.service";
import {UserService} from "../../service/user.service";
import {PostService} from "../../service/post.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  trips: any;
  // TODO transformer le ngOnInit pour récupérer depuis le back le même objet que sur tripEndFilter
  // TODO afficher avec la même structure que pour tirpEndFilter
  constructor(private token: TokenStorageService,
              private userService: UserService,
              private postService: PostService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    setTimeout(() => {
      this.userService.findById(this.currentUser.id).subscribe(
      user => {
        this.currentUser = user;
      });

      setTimeout(() => {
        this.postService.findByPost(this.currentUser.userId).subscribe(
          trips => {
            this.trips = trips;
          }
        );

      }, 1000)
    }, 500);
  }

  tripEndFilter(id: number) {

    this.postService.findByDateAndUserId(id).subscribe(
      trips => {
        this.currentUser.trips = trips;

        this.trips = trips;
      },
      error => {
        console.log("error=" + error.message);
      }
    );
  }
}

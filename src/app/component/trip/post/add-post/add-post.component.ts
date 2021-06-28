import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../../../service/post.service";
import {UserService} from "../../../../service/user.service";
import {Post} from "../../../../model/post/post";
import {PostPK} from "../../../../model/postPK/post-pk";
import {PostType} from "../../../../model/postType/post-type";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  addPostForm: FormGroup;
  post: Post;
  postId: number;
  postPK: PostPK;
  @Input() tripId: number;

  userId: any;
  users: any[];
  posttypes: PostType[];
  posttype: any;

  constructor(private formBuilder: FormBuilder,
              public postService: PostService,
              public userService: UserService) { }

  ngOnInit(): void {
    this.recupData();
    this.form();
  }
  form() {
    this.addPostForm = this.formBuilder.group({
      Id:  this.formBuilder.group({
        tripId:  ['', Validators.required],
        userId:  ['', Validators.required],
      }),
      postId: ['', Validators.required]
    });
  }
  recupData() {
    this.userService.findByRoleId('1').subscribe(
      (users) => {
        this.users = users;
      },
      (error) => {
        console.log('error = ' + error.message);
      }
    );
    this.postService.findAllPostType().subscribe(
      (posttypes) => {
        this.posttypes = posttypes;
      },
      (error) => {
        console.log('error = ' + error.message);
      }
    );
  }
  onSubmit() {
    const data = this.addPostForm.value;

    setTimeout(() => {
      this.postPK = {
        tripId : this.tripId,
        userId : data.Id.userId,
      }
      this.posttype = {
        postId : data.postId,
      }
      this.post = {
        id : this.postPK,
        posttype: this.posttype,
      }
      this.postService.add(this.post)
    }, 1000);
  }
}

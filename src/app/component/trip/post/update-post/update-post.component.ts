import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../../../model/post/post";
import {PostPK} from "../../../../model/postPK/post-pk";
import {PostType} from "../../../../model/postType/post-type";
import {PostService} from "../../../../service/post.service";
import {UserService} from "../../../../service/user.service";
import {User} from "../../../../model/user/user";

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  updatePostForm: FormGroup;
  post: Post;
  postPK: PostPK;
  @Input() tripId: number;
  @Input() userId: number;
  @Input() postId: number;
  users: User;
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
    this.updatePostForm = this.formBuilder.group({
      Id:  this.formBuilder.group({
        tripId:  [this.tripId, Validators.required],
        userId:  [this.userId, Validators.required],
      }),
      postId: [this.postId, Validators.required]
    });
  }

  recupData() {
    this.userService.findById(this.userId).subscribe(
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
  onSubmit(){
    const data = this.updatePostForm.value;

    setTimeout(()=>{
      this.postPK={
        tripId:data.Id.tripId,
        userId : data.Id.userId,
      }
      this.posttype={
        postId:data.postId,
      }
      this.post={
        id:this.postPK,
        posttype:this.posttype
      }
      this.postService.update(this.tripId,this.userId,this.post)
    },1000)
  }
}

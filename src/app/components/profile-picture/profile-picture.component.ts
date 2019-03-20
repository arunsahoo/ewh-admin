import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../../services/user-login.service';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss']
})
export class ProfilePictureComponent implements OnInit {
  userData: any = {};

  constructor(private userService: UserLoginService) { }

  ngOnInit() {
    this.userService.getUser()
    .then((response) => {
      this.userData = response.data.data;
    })
    .catch((error) => {
      console.log(error);
    });
  }

}

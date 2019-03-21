import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../../services/user-login.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss', '../../dashboard.common.scss']
})
export class UsersComponent implements OnInit {
  users: any = [];
  userData: any = [];

  constructor(private userService: UserLoginService) { }

  ngOnInit() {
    this.userService.getAllUsers()
    .then((Response) => {
      this.users = Response.data.data;
    })
    .catch((error) => {
      console.log(error);
    });

    this.userService.getUser()
    .then((response) => {
      this.userData = response.data.data;
    })
    .catch((error) => {
      console.log(error);
    });
  }

  updateStatus(id) {

  }

  editUser(id) {
    this.userService.edit(id)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  deleteUser(id) {
    this.userService.delete(id)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }
}

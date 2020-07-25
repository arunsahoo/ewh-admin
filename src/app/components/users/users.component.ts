import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserLoginService } from '../../services/user-login.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss', '../../dashboard.common.scss']
})
export class UsersComponent implements OnInit {
  users: any = [];
  userData: any = [];
  userGroups: any = [];

  constructor(private userService: UserLoginService, private SpinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.SpinnerService.show();
    this.userService.getAllUsers()
    .then((Res) => {
      this.users = Res.data.data;
      this.SpinnerService.hide();
    })
    .catch((error) => {
      console.log(error);
      this.SpinnerService.hide();
    });

    this.userService.getUser()
    .then((Res) => {
      this.userData = Res.data.data;
    })
    .catch((error) => {
      console.log(error);
    });
    this.userService.getUserGroups()
    .then((Res) => {
      this.userGroups = Res.data.data;
    })
    .catch((error) => {
      console.log(error);
    });
  }

  updateStatus(id, status) {
    alert(status);
  }

  editUser(id) {
    this.userService.edit(id)
    .then((Res) => {
      console.log(Res);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  deleteUser(id) {
    const confirmDelete = confirm('Do you want to remove this user account premanently!');

    if (confirmDelete === true) {
      this.userService.delete(id)
      .then((Res) => {
        console.log(Res);
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }
}

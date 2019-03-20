import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../../services/user-login.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss', '../../dashboard.common.scss']
})
export class UsersComponent implements OnInit {
  users: any = [];

  constructor(private userService: UserLoginService) { }

  ngOnInit() {
    this.userService.getAllUsers()
    .then((Response) => {
      console.log(Response.data);
      this.users = Response.data.data;
    })
    .catch((error) => {
      console.log(error);
    });
  }
}

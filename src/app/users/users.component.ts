import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { User } from '../user/user'
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user:User

  constructor(public userservice:UserService) { }

  searchUser(search){
    this.userservice.getUsername(search)
  }

  ngOnInit(): void {
    this.userservice.getUsername('Galgallo1')
    this.user=this.userservice.user


  }

}

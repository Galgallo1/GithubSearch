import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { User } from '../user/user'
import { environment } from '../../environments/environment'
import { Repo } from '../repo/repo';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user:User;
  repo:Repo;
  
  
  constructor(public userservice:UserService) { }
  

  //searchUser(search){
  //  this.userservice.getUsername(this.search).then(
    //  (success)=>{
      //  this.user = this.userservice.getUsername(search);
      //},
      //(error)=>{
      //  console.log(error)
      //}
    //);    
  //}

    

  ngOnInit(): void {
    
    this.userservice.getUsername()
    this.user=this.userservice.user
    
    
  }

}

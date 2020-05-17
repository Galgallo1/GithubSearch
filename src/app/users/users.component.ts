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

  user: User;
repo: Repo;
  constructor(public myService: UserService, private repoService: UserService) {
  }

  searchs(searchName) {
    this.myService.searchUSer(searchName).then(
      (success)=>{
        this.user = this.myService.user;
      },
      (error)=>{
        console.log(error)
      }
    );
      this.repoService.getReopos(searchName).then(
        (results)=>{
          this.repo =this.repoService.repo
          console.log(this.repo);
        },
        (error)=>{
          console.log(error);
        }
      );
  }

  ngOnInit() {
    this.searchs('Galgallo1');
  }
}

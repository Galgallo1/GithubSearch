import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Repo } from '../repo/repo';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repo:Repo
  constructor( public repoService: UserService ) { }

  repoSearch(searchName){
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
    this.repoSearch('Owiti-Charles');
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user/user';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Output() searchUser = new EventEmitter<User>()

  completesearch:string

  constructor(public userservice:UserService) { }

  getUser(completesearch){
    this.searchUser.emit(completesearch)

  }

  ngOnInit(): void {
  }

}

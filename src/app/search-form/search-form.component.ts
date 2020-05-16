import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user/user';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Output() searchUser = new EventEmitter<any>()

  search:string

  constructor(public userservice:UserService) { }

  getUser(){
    this.searchUser.emit(this.search)
    this.search=''
  }

  ngOnInit(): void {

  }

}

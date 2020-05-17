import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user/user';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchName:string;
  @Output() searchOutput = new EventEmitter<any>()
  constructor() { }

  ngOnInit() {
  }
  search(){
    this.searchOutput.emit(this.searchName);
    this.searchName = "";
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user/user'
import { environment } from '../environments/environment'
import { Repo } from './repo/repo'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  repo:Repo
  user:User
  Searchurl:string='https://api.github.com/users/'
  constructor(private http:HttpClient) { 
    this.user= new User('','','','',0,0,0,'', new Date)
    this.repo= new Repo('','','', new Date,0,0,'')
  }


  searchUSer(searchName: string) {
   
    interface Responce {
      url:string,
      login: string;
      html_url:string;
      location:string
      public_repos:number;
      followers:number;
      following:number;
      avatar_url:string;
      created_at:Date;
    }

    return new Promise((resolve, reject) => {
      this.http.get<Responce>('https://api.github.com/users/'+searchName+'?access_token='+environment.ApiKey).toPromise().then(
        (result) => {
          this.user = result;
          console.log(this.user);
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
  }
  getReopos(searchName){
    interface Repos{
      name:string;
      html_url:string;
      description:string;
      forks:number;
      watchers_count:number;
      language:string;
      created_at:Date;
    }
    return new Promise((resolve,reject)=>{
      this.http.get<Repos>('https://api.github.com/users/'+searchName+"/repos?order=created&sort=asc?access_token="+environment.ApiKey).toPromise().then(
        (results) => {
          this.repo = results;
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
  }
  }
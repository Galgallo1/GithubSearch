import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user/user'
import { environment } from '../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:User
  Searchurl:string='https://api.github.com/users/'
  constructor(private http:HttpClient) { 
    this.user= new User('','','',0,0,0)

  }


  getUsername(search){
    interface ApiResponse{
     
      login:string
      avatar_url:any
      followers:number
      following:number
      public_repos:number
      
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(this.Searchurl+'?access_token='+search+environment.ApiKey).toPromise().then(response=>{
        this.user.login = response.login
        this.user.avatar_url=response.avatar_url
        this.user.followers=response.followers
        this.user.following=response.following
        this.user.repos=response.public_repos
        resolve()
      },
      error=>{
        this.user.error = "Sorry, enter specific username or check your internet connection."
        

        reject(error)
      })
    })
    return promise
  }
  
}
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
    this.user= new User('','','',0,0,0, new Date)
    this.repo= new Repo('','','', new Date,0,'')
  }


  getUsername(){
    interface ApiResponse{
     
      login:string
      avatar_url:any
      followers:number
      following:number
      public_repos:number
      created_at:Date
      
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/users/Galgallo1'+'?access_token='+environment.ApiKey).toPromise().then(response=>{
        this.user.login = response.login
        this.user.avatar_url=response.avatar_url
        this.user.followers=response.followers
        this.user.following=response.following
        this.user.repos=response.public_repos
        this.user.joined=response.created_at
        resolve()
      },
      error=>{
        this.user.error = "Sorry, enter specific username or check your internet connection."
        

        reject(error)
      })
    })
    return promise
  }

  getRepos(){
    interface Repos{
      name:string;
      html_url:string;
      description:string;
      forks:number;
      watchers_count:number;
      language:string;
      created_at:Date;
    }

    let promise = new Promise((resolve,reject)=>{
      this.http.get<Repos>('https://api.github.com/users/Galgallo1/repos?order=created&sort=asc?access_token='+environment.ApiKey).toPromise().then(response=>{
      this.repo.name=response.name
      this.repo.created_at=response.created_at
      this.repo.language=response.language
      this.repo.forks=response.forks
      this.repo.description=response.description
      this.repo.html=response.html_url
      

      
      },
      error=>{
        this.user.error = "Sorry, enter specific username or check your internet connection."
        

        reject(error)
      })
    })
    return promise 
      
      
  }
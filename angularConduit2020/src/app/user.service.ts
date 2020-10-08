import { Injectable, ɵALLOW_MULTIPLE_PLATFORMS } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserEnvelope, User, UserCreateCommand, UserLogInCommand } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;

  httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  createuser(User: User) {
    let request = this.httpClient.post<UserEnvelope>("http://swindev.me/users", {
      user: User
    } as UserCreateCommand);

    request.subscribe((response) => {
      this.user = response.user;
    },
      (error) => {
        console.log("The Error recieved from http://swindev.me/swagger", error);
      })
  }

  userLogin(User: User) {
    let request = this.httpClient.post<UserEnvelope>("http://swindev.me/users/login", {
      user: User
    } as UserLogInCommand);

    request.subscribe((response) => {
      console.log(response);
    }, (error) => {
      if(error.status == 401){
        alert("Login unsuccessfull, incorrect email and/or password");
      }
    })
  }

}

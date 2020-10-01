import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserEnvelope, User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;

  httpClient: HttpClient;
  constructor(httpClient: HttpClient) { 
    this.httpClient = httpClient;
  }

  createuser(userName: string, email: string, password: string){
    let request = this.httpClient.post<UserEnvelope>("http://swindev.me/user", {
      userName: userName,
      email: email,
      password: password
    }as User);

    request.subscribe((response) => {
      
      
    })
 }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserEnvelope, User, CreateCommand} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;

  httpClient: HttpClient;
  constructor(httpClient: HttpClient) { 
    this.httpClient = httpClient;
  }

  createuser(User: User){
    let request = this.httpClient.post<UserEnvelope>("http://swindev.me/users", {
     user: User
    }as CreateCommand);

    request.subscribe((response) => {
      this.user = response.user;
    })
 }
}

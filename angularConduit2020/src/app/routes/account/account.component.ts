import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  login(){
    this.userService.userLogin(
      {
        userName: "yenal",
        email: "yenal@gmail.com",
        password: "123yenal456"
      }
    )
    
  }

}

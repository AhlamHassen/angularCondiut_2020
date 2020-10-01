import { Component } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ArticleEnvelope, Article} from './article';
import { ArticlesService } from './articles.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularConduit2020';
  public articlesService: ArticlesService;
  
  constructor(articleService: ArticlesService, public userService:UserService){
     this.articlesService = articleService;
  }

  create(){
    this.articlesService.createAnonymous("Ahlam", {
      title: "Amiiy - Http post requests",
      description: "posting into webservers",
      body: "something"
    });
  }

  createUser(){
    this.userService.createuser({
      userName: "yenal",
      email: "yeanl@gmail.com",
      password: "123yenal456"
    });
  }

}

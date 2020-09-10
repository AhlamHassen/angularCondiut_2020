import { Component } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ArticleEnvelope, Article} from './article';
import { ArticlesService } from './articles.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularConduit2020';
  public articlesService: ArticlesService;
  
  constructor(articleService: ArticlesService){
     this.articlesService = articleService;
  }

}

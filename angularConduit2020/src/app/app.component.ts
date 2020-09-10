import { Component } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ArticleEnvelope, Article} from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularConduit2020';
  private httpClient: HttpClient;
  public art: Article[];

  constructor(httpClient: HttpClient){
     this.httpClient = httpClient;
  }

  LogIn(){
    let request = this.httpClient.get<ArticleEnvelope>("https://swindev.me/articles");
    request.subscribe((response) => {
      console.log(response);

      this.art = response.articles;
    })
  }
}

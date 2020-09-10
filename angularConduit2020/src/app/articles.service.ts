import { Injectable } from '@angular/core';
import { Article, ArticleEnvelope } from './article';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  
  public articles: Article[];
  loading: boolean = false;
  loaded: boolean = false;

  private httpClient: HttpClient;
  
  constructor(httpClient: HttpClient){
     this.httpClient = httpClient;
  }

  get(){
    let request = this.httpClient.get<ArticleEnvelope>("https://swindev.me/articles");
    this.loading = true;
    this.loaded = false;

    request.subscribe((response) => {
      this.articles = response.articles;

      this.loading = false;
      this.loaded = true;
    });
  }
}

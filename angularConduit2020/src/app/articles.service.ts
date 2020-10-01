import { Injectable } from '@angular/core';
import { Article, ArticlesEnvelope, CreateAnonymousCommand, ArticleEnvelope } from './article';
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
    let request = this.httpClient.get<ArticlesEnvelope>("https://swindev.me/articles");
    this.loading = true;
    this.loaded = false;

    request.subscribe((response) => {
      this.articles = response.articles;

      this.loading = false;
      this.loaded = true;
    });
  }

  createAnonymous(username: string, article: Article){
     let request = this.httpClient.post<ArticleEnvelope>("http://swindev.me/articles/anonymous", {
       userName:username,
       article: article
     }as CreateAnonymousCommand);

     request.subscribe((response) => {
       this.articles = [...this.articles, response.artticle];
       this.get();
     })
  }
}

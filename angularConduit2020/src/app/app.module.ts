import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticlesComponent } from './routes/articles/articles.component';
import { AccountComponent } from './routes/account/account.component';

const routes: Routes = [
  {path: "Articles", component: ArticlesComponent},
  {path: "Account", component: AccountComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ArticleDetailsComponent,
    ArticleListComponent,
    ArticlesComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export interface ArticlesEnvelope{
    articles: Article[];
    articlesCount: number;
}

export interface Article{
    articleId?: number;
    title: string;
    description: string;
    body: string;
}

export interface ArticleEnvelope{
    artticle: Article;
}

export interface CreateAnonymousCommand{
    userName: string;
    article: Article;
}


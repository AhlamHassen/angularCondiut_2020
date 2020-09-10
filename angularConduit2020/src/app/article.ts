export interface ArticleEnvelope{
    articles: Article[];
    articlesCount: number;
}

export interface Article{
    articleId: number;
    title: string;
}
export interface FetchedArticles {
  status: string;
  totalResults: number;
  articles: (Article)[] | null;
}
export interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
export interface Source {
  id: number | null;
  name: string;
}

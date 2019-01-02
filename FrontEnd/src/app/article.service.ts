import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ARTICLES } from './mock_articles';
import { Article } from './article';
import { Observable } from 'rxjs/internal/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token',
    'Accept': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articleUrl = 'http://localhost:9080/SolTest/api/article'; 
  


  constructor(private http: HttpClient ) { }

  getArticles () : Observable<Article[]> {
    return this.http.get<Article[]> (this.articleUrl);
    
    //return ARTICLES;
  }

  saveArticles (article : Article) : Observable<Article[]> {
    return this.http.post<Article[]> (this.articleUrl, article, httpOptions);
  }

  deleteArticle (id : String) : Observable<Article[]> {
    const url = `${this.articleUrl}/${id}`; 
    return this.http.delete<Article[]>(url, httpOptions);

    // return this.http.delete<Article> (this.articleUrl, article, httpOptions);
  }
}

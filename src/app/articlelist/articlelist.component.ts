import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article';

@Component({
  selector: 'articlelist',
  templateUrl: './articlelist.component.html',
  styleUrls: ['./articlelist.component.css']
})
export class ArticlelistComponent implements OnInit {
  @Input()
  articles : Article[];

  private _totalAmount: number;
  get totalAmount(): number {
      let total : number = 0;
      if (this.articles != null) {
        for (let art of this.articles) {
          total = total + art.total.valueOf(); 
        }  
      }
      return total;
  }

  constructor(private articleService : ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles().subscribe (
      data => this.articles = data
    );
  }


  onInserted(article: Article) {
    this.articleService.saveArticles (article).subscribe(
      data => this.articles = data
    ) ;
  }

  onDeleted(article: Article) {
    this.articleService.deleteArticle (article.articleId).subscribe(
      data => this.articles = data
    ) ;
  }

  onEdit(article: Article) {
    this.articleService.saveArticles (article).subscribe(
      data => this.articles = data
    ) ;
  }
}

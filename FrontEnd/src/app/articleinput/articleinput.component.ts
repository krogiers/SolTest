import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'articleinput',
  templateUrl: './articleinput.component.html',
  styleUrls: ['./articleinput.component.css']
})
export class ArticleinputComponent implements OnInit {
  public inputArticle : Article;

  @Output() inserted = new EventEmitter<Article>();
  
  constructor() { 
    
  }

  ngOnInit() {
    this.initArticle();
  }
  
  private initArticle () {
    this.inputArticle = <Article> {};
  }

  registerProduct() {
    console.log (this.inputArticle);
    this.inserted.emit(this.inputArticle);
    this.initArticle();
  }
}

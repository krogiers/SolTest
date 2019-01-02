import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../article';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: '[article]',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Output() deleted = new EventEmitter<Article>();
  @Output() edited = new EventEmitter<Article>();

  @Input()
  article : Article;

  editArticle : Article;
  
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  onDelete () {
    this.deleted.emit(this.article);
    console.log(this.article.product);
  } 

  onEdit (content) {
    this.editArticle = Object.assign({}, this.article);
    this.openDialog(content);
  } 


  private openDialog(content) {
    this.modalService.open(content, {centered: true}).result.then(
      (result) => {
        if (result == "Save") {
          this.edited.emit(this.editArticle);
          console.log(this.article.product + ' was edited');
        }
      }, 
      (reason) => {}
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}

import { Component, OnInit, Query, OnDestroy } from '@angular/core';

import { Product } from "../product";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductService }  from '../product.service';
import { Observable , Subscription } from 'rxjs';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  products: Observable<Product[]>;
  
  constructor(private route: ActivatedRoute,private service: ProductService,) { }
 
  ngOnInit():void {
    this.route.queryParams.subscribe((params: ParamMap) => {
            console.log(params);
            this.products=this.service.getComment(params['userId'])
            console.log(this.products);
          
          }) 
      }
  }

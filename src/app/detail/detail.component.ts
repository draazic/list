import { Component, OnInit,OnDestroy } from '@angular/core';
import { Product } from "../product";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductService }  from '../product.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  
  product$: Observable<Product>;
  

  
 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductService,
    

  ) { }


  

  ngOnInit() {

    this.product$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getProduct(params.get('id'))  
        )      
      );    
    }
  }

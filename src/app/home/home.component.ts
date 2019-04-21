import { Component, OnInit } from '@angular/core';
import { Product } from "../product";
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductService }  from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products$:Product[];
  

  constructor(
    private service: ProductService,
    private route: ActivatedRoute,
    
  ) { }

  ngOnInit() {
    this.service.getProducts().subscribe((p) => {
      this.products$ = p;
      console.log(p);
    },
    (e) => {
      console.log('le serveur n a pas repondu');
    }); 
   }



}

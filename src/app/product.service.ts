import { Injectable } from '@angular/core';
import { MessageService } from './message.service'; 
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from "./product";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
  })
export class ProductService {

    
    constructor(private http: HttpClient) { }


    getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>('https://jsonplaceholder.typicode.com/posts')
    }


    getProduct(id: number | string){
      console.log(id);  
        return this.getProducts().pipe(  
        map((products: Product[]) => products.find(product => product.id === +id))
        
        );
        
    }

    getComment(userId: number | string){
      console.log(userId);
       return this.http.get<Product[]>('https://jsonplaceholder.typicode.com/posts?userId='+userId)
     
       
    }


}
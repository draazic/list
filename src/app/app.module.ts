import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import {HttpClientModule} from '@angular/common/http';
import { CommentComponent } from './comment/comment.component';


const appRoutes: Routes =[
  {path:'',component:AcceuilComponent,data:{title :'Acceuil'}},
  {path:'products',component:HomeComponent,data:{title :'la liste'}},
  {path:'product/:id',component:DetailComponent,data:{title :'le détail'}},
  {path:'product',component:CommentComponent,data:{title :'les commentaires'}
},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    IndexComponent,
    AcceuilComponent,
    CommentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})




export class AppModule {



 }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';

import { ArticleService } from './article/article.service';

//import { ApolloClient } from 'apollo-client';
//import { ApolloModule } from 'apollo-angular';


//const client = new ApolloClient();

//export function provideClient(): ApolloClient {
  //return client;
//}

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
    //ApolloModule.forRoot(provideClient) 
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

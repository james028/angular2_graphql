import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import { Angular2Apollo } from 'angular2-apollo';

import gql from 'graphql-tag';

@Injectable()

export class ArticleService {
    
    
constructor(private apollo: Angular2Apollo) {
    let Query = apollo.query({
        query:  gql`
          {
  articles(limit: 4, t: Article) {
    id
    title
    url
    author {
      name
    }
  }
}
        `
    });
    let subscription = Query.subscribe({
        next: result => {
            //result.data.articles;
        },
        error: error => {
            console.log('Erorr: $(error.message)');
        }
    });
  } 


}

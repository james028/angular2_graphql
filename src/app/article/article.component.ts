import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ArticleService } from './article.service';
import { client } from './graphql.client';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { Angular2Apollo, ApolloQueryObservable } from 'angular2-apollo';
import { Art } from './article';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import gql from 'graphql-tag';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

public articles: Observable<any[]>;


  constructor(private apollo: Angular2Apollo) {

  }


  ngOnInit() {
    this.articles = this.apollo.watchQuery({query: Query}).
    map(({data}) => data.articles.title);
  }
Ge: string = "uuu";
}

const Query = gql`
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

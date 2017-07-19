import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ArticleService } from './article.service';
import { client } from './graphql.client';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { Angular2Apollo } from 'angular2-apollo';
import { ListGraphql } from './list.graphql';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

todos: Observable<any>;

  constructor(private apollo: Angular2Apollo) {

  }


  ngOnInit() {
    this.todos = this.apollo.watchQuery({query: query$}).
    map(({data}) =>data.articles);
  }

  
}

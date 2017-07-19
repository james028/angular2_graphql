import { Component } from '@angular/core';
import { Apollo } from 'angular2-apollo';

import gql from 'graphql-tag';

import { client } from './graphql.client';

@Component({
  selector: 'list-graphql',
  template: require('raw!./List.graphql.html'),
})
@Apollo({
  client,
  queries(context: ListGraphql) {
    return {
      data: {
        query: gql`
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
      }
    };
  }
})
export class ListGraphql {}
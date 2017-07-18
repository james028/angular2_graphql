import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from './article.service';
import { ArticleItem } from "./article";
import { client } from './graphql.client';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { Apollo } from 'angular2-apollo';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {


  constructor(
    private apollo: Apollo,
  ) {}


  ngOnInit() {
    this.loadProjects()
  }

  loadProjects() {
    this.apollo.watchQuery({
      query: ProjectsQuery,
      variables: {
        status: this.selectedStatus,
      },
    })
      .map(result => result.data.projects.edges.map(item => item.node))
      .subscribe(projects => {
        this.projects = projects
      });
  }

  

Ge: number = 34;
}

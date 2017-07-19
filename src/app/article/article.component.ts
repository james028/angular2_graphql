import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from './article.service';
import { client } from './graphql.client';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { Apollo } from 'angular2-apollo';
import { ListGraphql } from './list.graphql';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {


  constructor(private apollo: Apollo) {

  }


  ngOnInit() {
    this.loadProjects()
  }

  loadProjects() {
    this.apollo.watchQuery({
      query: this.ProjectsQuery,
    
    })
      .map(result => result.data.projects.edges.map(item => item.node))
      .subscribe(projects => {
        this.projects = projects
      });
  }






//const ProjectsQuery = gqlquery, getProjects($status: String) {

//};
  

//Ge: number = 34;
}

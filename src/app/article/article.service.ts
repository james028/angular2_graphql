import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { client } from './graphql.client';

@Injectable()

export class ArticleService {
    
    private _url: string = 'https://mobileapi.wp.pl/v1/graphql';

    constructor(private _http: Http) {

    }

    getArt(): Observable<any> {
        return this._http.get(this._url)
        .map((response:Response) => response.json())
        .catch(this._errorHandler);

    }

    _errorHandler(error: Response) {
        console.error(error);
        return Observable.throw(error || "Server Error");
    }

    
}
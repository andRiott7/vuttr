import { ToolItem } from './../models/tools';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';
import { BaseService } from './base.service';
import { URL_API } from '../app.api';

@Injectable({
    providedIn: 'root'
})
export class ToolService extends BaseService {

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    }

    constructor(private http: HttpClient) {
        super()
    }

    newTools(request): Observable<ToolItem> {
        return this.http.post<ToolItem>(`${URL_API}`, request, this.httpOptions)
            .pipe(take(1), catchError(this.handleError));
    }

    deleteTools(id: any): Observable<ToolItem> {
        return this.http.delete<any>(`${URL_API}/${id}`, this.httpOptions)
            .pipe(take(1), catchError(this.handleError));
    }

    getTools(): Observable<ToolItem[]> {
        return this.http.get<ToolItem[]>(`${URL_API}`)
            .pipe(
                tap(console.log),
                catchError(this.handleError));
    }


    getSearch(
        searchTerm: string,
        filterTags?: string,
      ): Observable<ToolItem[]> {
        let url = `${URL_API}/?q=:busca=${searchTerm}`;
        let filters = '';

        if (filterTags) {
            url = `${URL_API}/search/${filterTags}/?tags_like=:busca=${searchTerm}`
        }
        return this.http.get<any>(`${url}${filters}`).pipe(catchError(this.handleError))
      }
}


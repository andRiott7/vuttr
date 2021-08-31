import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { BaseService } from './base.service';
import { ToolItem } from '../models/tools';
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
        return this.http.get<any>(`${URL_API}`)
            .pipe(catchError(this.handleError));
    }

    getSearch() {}

}


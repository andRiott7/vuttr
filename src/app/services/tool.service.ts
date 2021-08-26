import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BaseService } from './base.service';
import { ToolItem } from '../models/tools';
import { URL_API } from '../app.api';

@Injectable({
    providedIn: 'root'
})
export class ToolService extends BaseService {
    constructor(private http: HttpClient) {
        super()
    }

    getTools(): Observable<ToolItem[]> {
        return this.http.get<any>(`${URL_API}/tools`)
            .pipe(catchError(this.handleError));
    }
    sendTools(name: string, link: string, description: string, tags: string): Observable<ToolItem[]> {
        const json = {
            name: name,
            link: link,
            description: description,
            tags: tags
        };

        return this.http.post<any>(`${URL_API}/tools`, JSON.stringify(json))
            .pipe(catchError(this.handleError));
    }

    getSearch() {}

}


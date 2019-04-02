import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { baseUrl } from '../config/api-service.config';
import {each} from 'lodash';

type HttpMethods = 'DELETE' | 'GET' | 'HEAD' | 'JSONP' | 'OPTIONS';

@Injectable({
    providedIn: 'root',
})
export class ApiService {

    private baseUrl = baseUrl;

    constructor(private httpClient: HttpClient) {

    }

    send(method: HttpMethods, url: string, params: object | Array<string>) {
        const requestUrl = this.getUrl(url, params);
        const httpRequest: HttpRequest<any> = new HttpRequest(method, requestUrl);
        this.httpClient.request(httpRequest);
    }

    getUrl(url:string, params: object) {
        const paramsList: string[] = [];
        each(params, (paramValue: any, paramName: string | number) => {
            paramsList.push(`${paramName}=${paramValue}`);
        });
        return `${this.baseUrl}/${url}${paramsList.length ? '?' + paramsList.join('&') : ''}`;
    }

}
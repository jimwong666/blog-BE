import { Injectable, HttpService } from '@nestjs/common';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpService {
	constructor(private readonly http: HttpService) {}

	GetHttp(): HttpService {
		return this.http;
	}
	get<T = any>(
		url: string,
		config?: AxiosRequestConfig
	): Observable<AxiosResponse<T>> {
		return this.http.get(url, config);
	}
}

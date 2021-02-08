import { Injectable, HttpService } from '@nestjs/common';
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { HttpRequestMethods } from './httpRequst.interface';

interface params {
	readonly methods: HttpRequestMethods,
	readonly url: string,
	readonly data?: any,
	readonly config: AxiosRequestConfig
}

@Injectable()
export class httpRequestService extends HttpService {
	constructor(private readonly httpService: HttpService){
		super();
	}

    get<T = any>(
		url: string, 
		config: AxiosRequestConfig = {

		}
	): Observable<AxiosResponse<T>> {
		return this.httpService.get(url, config);
	};

    delete<T = any>(
		url: string, 
		config: AxiosRequestConfig = {

		}
	): Observable<AxiosResponse<T>>{
		return this.httpService.delete(url, config);
	};

    post<T = any>(
		url: string, 
		data?: any, 
		config: AxiosRequestConfig = {

		}
	): Observable<AxiosResponse<T>> {
		return this.httpService.post(url, data, config);
	};

    put<T = any>(
		url: string, 
		data?: any, 
		config: AxiosRequestConfig = {

		}
	): Observable<AxiosResponse<T>> {
		return this.httpService.put(url, data, config);
	};
}

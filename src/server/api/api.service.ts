import { Injectable, HttpService } from '@nestjs/common';
import { ImgList } from './api.imgList.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';

@Injectable()
export class ApiService {
	constructor(private readonly http: HttpService) {}

	findAll(): Observable<AxiosResponse<ImgList[]>> {
		return this.http.get('https://focusapi.vemic.com/mock/144/imgList').pipe(
			map(response => response.data)
		)
	}
}

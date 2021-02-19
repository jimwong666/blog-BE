import { Injectable } from '@nestjs/common';
import { ImgList } from './api.imgList.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';
import { MyHttpService } from 'src/libs/my-http/src';
@Injectable()
export class ApiService {
	constructor(private readonly backend: MyHttpService) {}

	findAll(): Observable<AxiosResponse<ImgList[]>> {
		return this.backend.get('https://focusapi.vemic.com/mock/144/imgList').pipe(
			map(response => response.data)
		)
	}
}

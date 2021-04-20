import { Injectable } from '@nestjs/common';
import { ImgList } from './interface/imgList.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';
import { MyHttpService } from 'src/libs/my-http/src';
@Injectable()
export class ApiService {
	constructor(private readonly myHttp: MyHttpService) {}

	findAll(): Observable<AxiosResponse<ImgList[]>> {
		return this.myHttp.get('https://focusapi.vemic.com/mock/144/api/imgList').pipe(
			map(response => response.data)
		)
	}
}

import { Controller, Get, Header } from '@nestjs/common';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { ImgList } from './interface/imgList.interface';

@Controller('api')
export class ApiController {
	constructor(private readonly apiService: ApiService){}

	@Get('imgList')
	getImgList(): Observable<AxiosResponse<ImgList[]>> {
		const data = this.apiService.findAll();
		return data;
	}
}

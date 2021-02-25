import { Controller, Get, Header } from '@nestjs/common';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { ImgList } from './interface/imgList.interface';

@Controller('demo1')
export class ApiController {
	constructor(private readonly apiService: ApiService){}

	@Get('pre')
	getImgList(): Observable<AxiosResponse<ImgList[]>> {
		const data = this.apiService.findAll();
		return data;
	}
}

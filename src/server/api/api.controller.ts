import { Controller, Get } from '@nestjs/common';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { ImgList } from './interface/imgList.interface';

@Controller('api')
export class ApiController {
	constructor(private readonly apiService: ApiService) {}

	@Get('imgList')
	getImgList(): Observable<AxiosResponse<ImgList[]>> {
		return this.apiService.findAll();
	}
}

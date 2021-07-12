import { HttpService, Injectable } from '@nestjs/common';
@Injectable()
export class GlobalsService {
	constructor(private readonly http: HttpService) {}

	GetHttp(): HttpService {
		return this.http;
	}
}

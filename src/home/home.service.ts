import { Injectable } from '@nestjs/common';
import { Home } from './home.interface';

@Injectable()
export class HomeService {
	getHello(): Home {
		return {
		  title: "home",
		  content: ["awwrqw", "wfasgadsf", "sfsdgsdf"]
		};
	}
}

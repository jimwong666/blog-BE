import { Controller, Get, Render } from '@nestjs/common';
import { Home } from './home.interface';
import { HomeService } from './home.service';

@Controller()
export class HomeController {
	constructor(
		private readonly homeService: HomeService
	) {}
	
	@Get()
	@Render('home')
		getHello(): Home {
			return this.homeService.getHello();
		}
}

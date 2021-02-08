import { Controller, Get, Render } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Auth } from './auth.interface';

@Controller('login')
export class AuthController {
	constructor(private readonly authService: AuthService){}

	@Get()
	@Render('login')
	getHello(): Auth {
		return this.authService.getTitle();
	}
}

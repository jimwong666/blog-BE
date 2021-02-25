import { Body, Controller, Get, Post, Render, UsePipes } from '@nestjs/common';
import { LoginPipe } from '@pipe/login.pipe';
import { LoginInfoDTO } from './dto/loginInfo.dto';
import { LoginService } from './login.service'

@Controller('login')
export class LoginController {
	constructor(private readonly loginService: LoginService){};

	@Get()
	@Render('login')
	getHello(){}

	@UsePipes(new LoginPipe())
	@Post()
	getLogin(@Body() loginInfo: LoginInfoDTO): String{
		return this.loginService.validata(loginInfo);
	}
}

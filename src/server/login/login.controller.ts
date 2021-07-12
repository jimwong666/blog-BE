import { Body, Controller, Get, Post, Render, UsePipes } from '@nestjs/common';
import { LoginPipe } from '@pipe/login.pipe';
import { LoginInfoDTO } from './dto/loginInfo.dto';
import { loginRet } from './interface/login.interface';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
	constructor(private readonly loginService: LoginService) {}

	@Get()
	@Render('login')
	getHello() {
		return 'Hello';
	}

	@UsePipes(new LoginPipe())
	@Post()
	getLogin(@Body() loginInfo: LoginInfoDTO): loginRet {
		return this.loginService.validate(loginInfo);
	}
}

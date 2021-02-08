import { Controller, Get, Render } from '@nestjs/common';
import { User } from "./user.inerface";
import { UserService } from './user.service'

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService){}
	
	@Get()
	@Render("user")
	getHello(): User{
		return this.userService.getUser();
	}
}

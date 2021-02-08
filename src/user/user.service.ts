import { Injectable } from '@nestjs/common';
import { User } from './user.inerface';

@Injectable()
export class UserService {
	getUser(): User {
		return {
			title: "获取用户",
			user: ["weqwrqwr", "wsafsfasf", "sfgarqwer648748"]
		}
	}
}

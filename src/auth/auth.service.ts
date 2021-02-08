import { Injectable } from '@nestjs/common';
import { Auth } from './auth.interface';

@Injectable()
export class AuthService {
	getTitle(): Auth {
		return {
		  title: "登录"
		};
	}
}

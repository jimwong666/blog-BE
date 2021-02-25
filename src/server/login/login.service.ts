import { Injectable } from '@nestjs/common';
import { LoginInfoDTO } from './dto/loginInfo.dto';

@Injectable()
export class LoginService {

	validata(body: LoginInfoDTO): string {
		return "123"
	}
}

import { Injectable } from '@nestjs/common';
import { LoginInfoDTO } from './dto/loginInfo.dto';
import { loginRet } from './interface/login.interface';

@Injectable()
export class LoginService {
	validate(body: LoginInfoDTO): loginRet {
		return {
			...body,
			retCode: 0
		};
	}
}

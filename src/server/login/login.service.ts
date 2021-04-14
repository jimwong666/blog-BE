import { Injectable } from '@nestjs/common';
import { LoginInfoDTO } from './dto/loginInfo.dto';
import { loginRet } from './interface/login.interface';

@Injectable()
export class LoginService {

	validata(body: LoginInfoDTO): loginRet {
		return {
			retCode: 0
		}
	}
}

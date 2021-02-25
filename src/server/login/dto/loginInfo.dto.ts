import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class LoginInfoDTO {
	@IsNotEmpty({message: "用户名不能为空！"})
	readonly userName: string;
	@IsNotEmpty({message: "密码不能为空！"})
	readonly password: string;
}
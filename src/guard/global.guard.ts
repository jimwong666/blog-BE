import { CanActivate, ExecutionContext, Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalGuard implements CanActivate {
// 路由守卫这里，只有在
	canActivate(
	context: ExecutionContext,
	): boolean | Promise<boolean> | Observable<boolean> {
		const request = context.switchToHttp().getRequest();
		// const token = context.switchToRpc().getData().headers.cookie.token;
		const token = "111";
		if (this.hasUrl(this.urlList, request.url)) {
			return true;
		}

		if (token) {
			try {
				// 这里可以添加验证逻辑
				return true;
			} catch (e) {
				throw new HttpException(
					'没有授权访问,请先登录',
					HttpStatus.UNAUTHORIZED,
				);
			}
		} else {
			throw new HttpException(
				'没有授权访问,请先登录',
				HttpStatus.UNAUTHORIZED,
			);
		}
	}

	// 不用鉴权 白名单
	private urlList: string[] = [
		'/login',
		'/logout',
		'/client',
		'/public',
	];

	private hasUrl(urlList: string[], url: string): boolean {
		let _flag: boolean = false;
		if (urlList.indexOf(url) >= 0 ){
			_flag = true;
		}
		return _flag;
	}
}

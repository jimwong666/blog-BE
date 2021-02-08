import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
	canActivate(
	  context: ExecutionContext,
	): boolean | Promise<boolean> | Observable<boolean> {
	  const request = context.switchToHttp().getRequest();
	  const token = context.switchToRpc().getData().headers.cookie.token;
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

	private urlList: string[] = [
		'/',
		'/login',
		'/user'
	];

	private hasUrl(urlList: string[], url: string): boolean {
		let _flag: boolean = false;
		if (urlList.indexOf(url) >= 0 ){
			_flag = true;
		}
		return _flag;
	}
}


import {
	CallHandler,
	ExecutionContext,
	Injectable,
	NestInterceptor
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Request, Response } from 'express';

@Injectable()
export class GlobalInterceptor implements NestInterceptor {
	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		const ctx = context.switchToHttp();
		const request = ctx.getRequest<Request>();
		const response = ctx.getResponse<Response>();
		return next.handle().pipe(
			map((data) => {
				response.header('Access-Control-Allow-Origin', '*');
				response.header('Access-Control-Allow-Credentials', 'true');
				return {
					statusCode: response.statusCode,
					timeStamp: new Date().toISOString(),
					path: request.url,
					message: response.statusMessage,
					data: data
				};
			})
		);
	}
}

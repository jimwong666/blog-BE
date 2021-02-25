import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate  } from 'class-validator';

@Injectable()
export class LoginPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    if(!metadata.metatype || !this.toValidate(metadata.metatype)) {
      return value;
    }

    const obj = plainToClass(metadata.metatype, value);
    const errors = await validate(obj);
    if(errors.length > 0) {
      const msg = Object.values(errors[0].constraints)[0];
      throw new BadRequestException(`Validation failed: ${msg}`);
    }
    return value;
  }

  private toValidate(metatype: any): boolean {
    const types: any[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}

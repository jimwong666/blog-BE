import { Injectable } from '@nestjs/common';
import { Home } from './home.inteface';

@Injectable()
export class AppService {
  getHello(): Home {
    return {
      title: 'home',
      content: 'this is home!'
    };
  }
}

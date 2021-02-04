import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Home } from './home.inteface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('home')
  getHello(): Home {
    return this.appService.getHello();
  }
}

import { Controller, Get, Render } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { Animals } from './animals.interface';

@Controller('animals')
export class AnimalsController {
	constructor(private readonly animalsService: AnimalsService){}

	@Get()
	@Render('animals/index')
	getHello(): Animals {
		return this.animalsService.getAnimals();
	  }
}

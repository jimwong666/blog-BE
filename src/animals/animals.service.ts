import { Injectable } from '@nestjs/common';
import { Animals } from './animals.interface';

@Injectable()
export class AnimalsService {
	getAnimals(): Animals {
		return {
			title: "animals",
			animals: "this is zoom!"
		}
	}
}

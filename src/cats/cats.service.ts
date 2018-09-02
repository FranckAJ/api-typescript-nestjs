import { Injectable } from '@nestjs/common';
import { CatDto } from './cat.dto';

@Injectable()
export class CatsService {

    cats: CatDto[]

    findAll(): CatDto[] {
         this.cats  = [
                new CatDto('Filomena'),
                new CatDto('Juventina')
         ]

        return this.cats;
    }

    create(cat: CatDto) {
        return cat;
    }
}

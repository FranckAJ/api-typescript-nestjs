import { Get, Controller, Post, Body, Param, Delete } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatDto } from './cat.dto';
 
@Controller('cats')
export class CatsController {

    constructor(private readonly catsService: CatsService) {}

    @Get()
    findAll(): CatDto[] {
        return this.catsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id) {
        return `Cat ID ${id}`
    }

    @Delete(':id')
    remove(@Param('id') id) {
      return `Cat removed ${id}`;
    }

    @Post()
    create(@Body() cat) {
        return this.catsService.create(cat)
    }

}

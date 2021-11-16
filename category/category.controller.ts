import { Body, Controller, Get, Post } from '@nestjs/common'
import { Category } from './category.entity'
import { CategoryService } from './caterory.service'

@Controller('categories')
export class CategoryController {
  constructor(
    private categoryService : CategoryService
  ) {}

  @Get('/getAll')
  getAll(){
    return this.categoryService.getAll()
  }

  @Post('/create')
  create(@Body() category : Category) {
    return this.categoryService.create(category)
  }
}
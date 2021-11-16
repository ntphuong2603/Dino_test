import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Category } from './category.entity'

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository : Repository<Category>
  ) { }

  getAll() : Promise<Category[]> {
    return this.categoryRepository.find()
  }

  getOne(id: number) : Promise<Category> {
    return this.categoryRepository.findOne(id)
  }

  async create (category: Category){
    this.categoryRepository.save(category)
  }
  
}
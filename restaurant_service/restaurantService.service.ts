import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { RestaurantService } from './restaurantService.entity'

@Injectable()
export class RestaurantServiceService {
  constructor(
    @InjectRepository(RestaurantService)
    private restaurantServiceRepository : Repository<RestaurantService>
  ) { }

  getAll() : Promise<RestaurantService[]> {
    return this.restaurantServiceRepository.find()
  }

  async create (restaurantService: RestaurantService){
    this.restaurantServiceRepository.save(restaurantService)
  }
}
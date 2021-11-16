import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Restaurant } from './restaurant.entity'

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private restaurantRepository : Repository<Restaurant>
  ) { }

  findAll() : Promise<Restaurant[]> {
    return this.restaurantRepository.find()
  }

  async findCondition(condition: object) : Promise<Restaurant[]> {
    return await this.restaurantRepository.find(condition)
  }

  async create(restaurant: Restaurant) {
    console.log('Restaurant create:', restaurant);
    await this.restaurantRepository.save(restaurant)
    return restaurant
  }

  async edit(id: number, restaurant: Restaurant) : Promise<Restaurant> {
    const restaurantEdited = await this.restaurantRepository.findOne(id);

    // if (!restaurantEdited){
    //   throw new NotFoundException('Not found restaurant')
    // }

    restaurantEdited.name = restaurant.name
    restaurantEdited.address = restaurant.address
    restaurantEdited.isActive = restaurant.isActive

    await this.restaurantRepository.save(restaurantEdited)
    console.log('Edited restaurant:', restaurantEdited); 
    return restaurantEdited
  }
}
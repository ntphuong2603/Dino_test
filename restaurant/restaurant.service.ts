import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
// import { Category } from 'category/category.entity'
import { Repository } from 'typeorm'
import { Restaurant } from './restaurant.entity'

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private restaurantRepository : Repository<Restaurant>,
  ) { }

  findAll() : Promise<Restaurant[]> {
    return this.restaurantRepository.find()
  }

  findOne(id: number) : Promise<Restaurant> {
    return this.restaurantRepository.findOne(id)
  }

  async findRestaurants(category: string) : Promise<Restaurant[]> {
    // const categoryRepository = getRepository(Category) 
    // const restaurants = await categoryRepository.find({ id: category})
    // return await this.restaurantRepository.find({categories:category})

    return await this.restaurantRepository
      .createQueryBuilder('restaurant')
      .where(`restaurant.categories LIKE "%${category}%"`)
      .getMany()

    // return await this.restaurantRepository.find({categories: ILike(`"${category.toString()}"`)})

    // console.log('Category: ', category.toString());
    
    // return this.restaurantRepository.find({ categories: ILike()});

    // return await this.restaurantRepository.createQueryBuilder()
    //   .select()
    //   .where(`MATCH (categories) AGAINST ('+${category.toString()}' IN NATURAL LANGUAGE MODE)`)
    //   .getMany()
  }

  async create(restaurant: Restaurant) {
    console.log('Restaurant create:', restaurant);
    await this.restaurantRepository.save(restaurant)
    return restaurant
  }

  async edit(id: number, restaurant: Restaurant) : Promise<Restaurant> {
    const restaurantEdited = await this.restaurantRepository.findOne(id);

    restaurantEdited.name = restaurant.name
    restaurantEdited.address = restaurant.address
    restaurantEdited.isActive = restaurant.isActive
    restaurantEdited.categories = restaurant.categories

    await this.restaurantRepository.save(restaurantEdited)
    console.log('Edited restaurant:', restaurantEdited); 
    return restaurantEdited
  }
}
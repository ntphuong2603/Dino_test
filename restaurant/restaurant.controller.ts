import { Body, Param, Controller, Get, Post } from '@nestjs/common'
import { Restaurant } from './restaurant.entity'
import { RestaurantService } from './restaurant.service'

@Controller('restaurants')
export class RestaurantController {
  constructor(
    private restaurantService: RestaurantService
  ) {}

  @Get('/getAll')
  findAll(){
    return this.restaurantService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id : number){
    console.log('ID', id);
    return this.restaurantService.findCondition({id: id})
  }

  @Get('/search')
  async find(@Param('condition') condition : object) {
    console.log('Condition:', condition);
    return this.restaurantService.findCondition(condition)
  }

  @Post('/create')
  create(@Body() restaurant: Restaurant) {
    // console.log('Restaurant:', restaurant);
    return this.restaurantService.create(restaurant)
  }

  @Post('/edit/:id')
  async editRestaurant(@Body() restaurant: Restaurant, @Param('id') id: number) {
    console.log('Restaurant:', restaurant, 'ID: ', id);
    const restaurantEdited = await this.restaurantService.edit(id, restaurant)
    return restaurantEdited
  }
  
}
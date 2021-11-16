import { Body, Controller, Get, Post } from '@nestjs/common'
import { RestaurantService } from './restaurantService.entity'
import { RestaurantServiceService } from './restaurantService.service'

@Controller('restaurant_services')
export class RestaurantServiceController {
  constructor(
    private restaurantServiceService : RestaurantServiceService
  ) {}

  @Get('/getAll')
  getAll(){
    return this.restaurantServiceService.getAll()
  }

  @Post('/create')
  create(@Body() restaurantService : RestaurantService) {
    return this.restaurantServiceService.create(restaurantService)
  }
}
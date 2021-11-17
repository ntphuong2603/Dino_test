import { Body, Param, Controller, Get, Post } from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Category } from 'category/category.entity';
import { CategoryService } from 'category/caterory.service';
import { getRepository } from 'typeorm';
// import { CategoryService } from '../category/caterory.service';
import { Restaurant } from './restaurant.entity'
import { RestaurantService } from './restaurant.service'

@ApiBearerAuth()
@ApiTags('Restaurants')
@Controller('restaurants')
export class RestaurantController {
  constructor(
    private restaurantService: RestaurantService,
    // private categoryService: CategoryService,
  ) {}

  @Get('/getAll')
  @ApiOperation({summary: 'Get all available restaurants'})
  findAll(){
    return this.restaurantService.findAll()
  }

  @Get(':id')
  @ApiOperation({summary: 'Get restaurant with specific id'})
  @ApiResponse({status: 200, description: 'Restaurant was found'})
  findOne(@Param('id') id : number){
    console.log('ID', id);
    return this.restaurantService.findOne(id)
  }

  @Get('/search/:category')
  @ApiOperation({summary: "Retrieve all restaurants have to serve these categories"})
  async find(@Param('category') category : string) {
    console.log('Categories:', category);
    return this.restaurantService.findRestaurants(category)
  }

  @Post('/create')
  @ApiOperation({summary: "Create a new restaurant with name and address"})
  @ApiResponse({status: 200, description: 'New restaurant was created successfully'})
  create(@Body() restaurant: Restaurant) {
    console.log('Restaurant - Create:', restaurant);

    // const categories = []
    // const categoryRepository = getRepository(Category)
    // restaurant.categories.forEach(async function (value){
    //   const category = await categoryRepository.findOne(value)
    //   categories.push(category)
    //   // categoryRepository.save(category)
    // })
    // restaurant.categories = categories

    // console.log('Restaurant - Create:', restaurant);
    // const newRestaurant = this.restaurantService.create(restaurant)
    // categories.forEach((value,index)=>{
    //   value.restaurant = newRestaurant;
    //   categoryRepository.save(value);
    // })

    // return newRestaurant
    return this.restaurantService.create(restaurant)
  }

  @Post('/edit/:id')
  async editRestaurant(@Body() restaurant: Restaurant, @Param('id') id: number) {
    console.log('Restaurant - Edit:', restaurant, 'ID: ', id);

    // const categories = []
    // restaurant.categories.forEach(async function (value){
    //   categories.push(await getRepository(Category).findOne(value))
    // })

    const restaurantEdited = await this.restaurantService.edit(id, restaurant)
    return restaurantEdited
  }
  
}
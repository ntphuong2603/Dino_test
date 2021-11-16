import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { RestaurantService } from './restaurantService.entity'
import { RestaurantServiceController } from './restaurantService.controller'
import { RestaurantServiceService } from './restaurantService.service'

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantService])],
  providers: [RestaurantServiceService],
  controllers: [RestaurantServiceController],
})

export class RestaurantServiceModule {}
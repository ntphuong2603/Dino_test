import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'
import { RestaurantModule } from './restaurant/restaurant.module'
import { CategoryModule } from './category/category.module'

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    RestaurantModule,
    CategoryModule,
  ],
})

export class AppModule {
  constructor(
    private connection : Connection
  ) {}
}
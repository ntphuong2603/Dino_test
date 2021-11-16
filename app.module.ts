import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { RestaurantModule } from './restaurant/restaurant.module'
import { CategoryModule } from './category/category.module'

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    RestaurantModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  constructor(
    private connection : Connection
  ) {}
}
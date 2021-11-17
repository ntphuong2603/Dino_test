import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Restaurant } from "../restaurant/restaurant.entity";
import { ApiProperty } from '@nestjs/swagger'
// import { Restaurant } from "../restaurant/restaurant.entity";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty({example: "Pho", description: "Category name for restaurant"})
  name: string;

  @Column()
  @ApiProperty({example: "Made from rice powder", description:" "})
  description: string;

  // @ManyToOne( () => Restaurant, restaurant => restaurant.categories)
  // restaurant: Restaurant;
}
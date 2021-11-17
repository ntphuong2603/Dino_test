import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Index } from "typeorm";
import { Category } from "../category/category.entity";
import { ApiProperty } from '@nestjs/swagger'

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty({example:"Restaurant A", description: "Name of restaurant"})
  name: string;

  @Column()
  @ApiProperty({example:"123 Queen Str.", description:"The restaurant physical location"})
  address: string;

  @Column({default:true})
  isActive: boolean;

  // @OneToMany( () => Category, category => category.restaurant)
  @Index({ fulltext: true })
  @Column()
  @ApiProperty({example: "1, 2", description: "A list of categories that restaurant will serve"})
  categories: string;
  // categories: Category[];
}
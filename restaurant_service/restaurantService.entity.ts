import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Restaurant } from "../restaurant/restaurant.entity";

@Entity()
export class RestaurantService {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

}
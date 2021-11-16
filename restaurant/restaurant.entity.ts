import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { RestaurantService } from "../restaurant_service/restaurantService.entity";

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column({default:true})
  isActive: boolean;

  @OneToMany( () => RestaurantService, restaurantService => restaurantService.id)
  services: RestaurantService[]

}
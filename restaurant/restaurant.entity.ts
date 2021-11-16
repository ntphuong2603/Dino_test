import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Category } from "../category/category.entity";

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

  @OneToMany( () => Category, category => category.restaurant)
  services: Category[]
}
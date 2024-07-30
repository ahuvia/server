import e from 'express';
import { Column, Entity } from 'typeorm';
import { Place } from './place.entity';

@Entity('restaurants')
export class Restaurant extends Place {
@Column()
  stars: number;

  @Column()
  hasDelivery: boolean;

  @Column()
  hasTakeAway: boolean;

  @Column()
  hasDineIn: boolean;

  @Column()
  priceToDish: number;
}

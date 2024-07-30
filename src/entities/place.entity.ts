import { EPlace } from 'src/enums'
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('places')
export class Place {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  create_date: Date

  @Column({type: 'text'})
  name: string

  @Column({type: 'text'})
  address: string
    
  @Column({type: 'text'})
  type: EPlace
}
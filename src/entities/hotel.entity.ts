import e from "express";
import { Column, Entity } from "typeorm";
import { Place } from "./place.entity";

@Entity('hotels')
export class Hotel extends Place {
    @Column()
    private stars: number;

    @Column()
    private hasPool: boolean;

    @Column()
    private hasSpa: boolean;

    @Column()
    private hasGym: boolean;

    @Column()
    private priceToNight: number;
}
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Place } from 'src/entities/place.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlaceService {
    constructor(
        @InjectRepository(Place)
        private readonly placeRepository: Repository<Place>
    ){}
    async createPlace(place: any): Promise<Place> {
        const createPlace = new Place();
        createPlace.name = place.name;
        createPlace.address = place.address;
        createPlace.type = place.type;
       const newPlace = await this.placeRepository.save(createPlace);
       return newPlace;
    }

    async getAllPlaces(): Promise<Place[]> {
        return await this.placeRepository.find();
    }

    async getPlaceById(id: number): Promise<Place | undefined> {
        return await this.placeRepository.findOne({where: {id}});
    }

   

    // updatePlace(id: string, updatedPlace: Place): void {
    //     const index = this.places.findIndex(place => place.id === id);
    //     if (index !== -1) {
    //         this.places[index] = updatedPlace;
    //     }
    // }

    // deletePlace(id: string): void {
    //     const index = this.places.findIndex(place => place.id === id);
    //     if (index !== -1) {
    //         this.places.splice(index, 1);
    //     }
    // }
}
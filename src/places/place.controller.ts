import { Body, Controller, Get, Post } from '@nestjs/common';
import { Place } from 'src/entities/place.entity';
import { PlaceService } from './place.service';
import { CreatePlaceDto } from './place.dto';

@Controller('/place')
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}
  @Get('/')
  async getAllPlaces() {
    return await this.placeService.getAllPlaces();
  }

  @Post('/')
  async createPlace(@Body() place: CreatePlaceDto) {
    const newPlace = await this.placeService.createPlace(place);
    return newPlace;
  }

  // @Put('/:id')
  // updatePlace(id: string, place: Place): Place {
  //     // Logic to update a place by its ID in the database
  //     // Return the updated Place object
  // }

  // @Delete('/:id')
  // deletePlace(id: string): void {
  //     // Logic to delete a place by its ID from the database
  // }
}

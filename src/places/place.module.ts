import { Module } from '@nestjs/common';
import { PlaceController } from './place.controller';
import { PlaceService } from './place.service';
import { Place } from 'src/entities/place.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Place])],
    controllers: [PlaceController],
    providers: [PlaceService],
})
export class PlaceModule {}
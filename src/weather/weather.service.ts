import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WeatherService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {}

  async getWeather(latitude: number, longitude: number) {
    const apiKey = this.configService.get<string>('API_KEY_WEATHER');
    const response = await firstValueFrom(
      this.httpService.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            lat: latitude,
            lon: longitude,
            appid: apiKey,
          },
        },
      )
    );

    return response.data;
  }
}
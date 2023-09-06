import { Controller, Get, HttpCode } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Dictionaries')
@Controller('dictionaries')
export default class DictionariesController {
  //   constructor() {}

  @Get('/get-car-models')
  @HttpCode(200)
  async getCarModels() {
    return [
      'Toyota',
      'Ford',
      'Chevrolet',
      'Honda',
      'Volkswagen',
      'Nissan',
      'BMW',
      'Mercedes-Benz',
      'Audi',
      'Hyundai',
      'Kia',
      'Subaru',
      'Mazda',
      'Porsche',
      'Ferrari',
      'Lamborghini',
      'Aston Martin',
      'Jaguar',
      'Land Rover',
      'Volvo',
      'Tesla',
      'Buick',
      'Cadillac',
      'GMC',
      'Dodge',
      'Jeep',
      'Chrysler',
      'Mitsubishi',
      'Alfa Romeo',
      'Lexus',
    ];
  }
}

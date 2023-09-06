import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import CarService from '../services/car.service';
import getByFilterDto from './dto/get-by-filter';
import { JwtAuthGuard } from 'src/app/guards/jwt-auth.guard';
import axios from 'axios';

@ApiTags('Car')
@Controller('car')
export default class CarController {
  constructor(private readonly carService: CarService) {}

  @Post('/get-many-by-filter')
  @HttpCode(200)
  async getManyByFilter(@Body() filter: getByFilterDto) {
    console.log({ filter });
    return this.carService.getManyByFilter(filter);
  }

  // @UseGuards(JwtAuthGuard)
  @Post('/create')
  @HttpCode(200)
  async create(@Body() creationParams) {
    console.log({ creationParams });
    return this.carService.createNew(creationParams);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/update')
  @HttpCode(200)
  async update(@Body() updateParams) {
    console.log({ updateParams });
    return this.carService.update(updateParams);
  }

  @Get('/check-by-vin')
  checkByVin() {
    axios({
      method: 'GET',
      url: 'https://vindecoder.p.rapidapi.com/decode_vin',
      params: {
        vin: '4F2YU09161KM33122',
      },
      headers: {
        'X-RapidAPI-Key': '074fc9f576msh7c816728cea8a1bp179fc2jsn29e78f66444d',
        'X-RapidAPI-Host': 'vindecoder.p.rapidapi.com',
      },
    })
      .then((res) => console.log({ res }))
      .catch((e) => console.log({ e }));
  }

  @Get('/all-brand')
  getAllBrand() {
    const url =
      'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/car_brand';
    const token = 'd7a12c52c175ca82a13e4e00c22dc7a1e8d332e0';
    const query = 'форд';

    const options = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Token ' + token,
      },
      query,
    };

    axios(url, options)
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  }
}

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { Restaurant as RestaurantModel, Prisma } from '@prisma/client';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Post()
  async createRestaurant(@Body() restaurantData: Prisma.RestaurantCreateInput): Promise<RestaurantModel> {
    return this.restaurantsService.createRestaurant(restaurantData);
  }

  @Get()
  async getRestaurants(): Promise<RestaurantModel[]> {
    return this.restaurantsService.getRestaurants();
  }

  @Get(':id')
  async getRestaurantById(@Param('id') id: string): Promise<RestaurantModel | null> {
    return this.restaurantsService.getRestaurantById(id);
  }

  @Put(':id')
  async updateRestaurant(@Param('id') id: string, @Body() restaurantData: Prisma.RestaurantUpdateInput): Promise<RestaurantModel> {
    return this.restaurantsService.updateRestaurant(id, restaurantData);
  }

  @Delete(':id')
  async deleteRestaurant(@Param('id') id: string): Promise<RestaurantModel> {
    return this.restaurantsService.deleteRestaurant(id);
  }
}
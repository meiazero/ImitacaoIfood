import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger'
import { Prisma, Restaurant as RestaurantModel } from '@prisma/client'
import { RestaurantsService } from './restaurants.service'

@ApiTags('restaurants')
@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @ApiOperation({ summary: 'Create restaurant' })
  @ApiParam({ name: 'restaurantData', type: Object, required: true })
  @ApiBearerAuth()
  @Post()
  async createRestaurant(
    @Body() restaurantData: Prisma.RestaurantCreateInput
  ): Promise<RestaurantModel> {
    return this.restaurantsService.createRestaurant(restaurantData)
  }

  @ApiOperation({ summary: 'Get all restaurants' })
  @ApiBearerAuth()
  @Get()
  async getRestaurants(): Promise<RestaurantModel[]> {
    return this.restaurantsService.getRestaurants()
  }

  @ApiOperation({ summary: 'Get restaurant by id' })
  @ApiParam({ name: 'id', type: String, required: true })
  @ApiBearerAuth()
  @Get(':id')
  async getRestaurantById(
    @Param('id') id: string
  ): Promise<RestaurantModel | null> {
    return this.restaurantsService.getRestaurantById(id)
  }

  @ApiOperation({ summary: 'Update restaurant' })
  @ApiParam({ name: 'id', type: String, required: true })
  @ApiBearerAuth()
  @Put(':id')
  async updateRestaurant(
    @Param('id') id: string,
    @Body() restaurantData: Prisma.RestaurantUpdateInput
  ): Promise<RestaurantModel> {
    return this.restaurantsService.updateRestaurant(id, restaurantData)
  }

  @ApiOperation({ summary: 'Delete restaurant' })
  @ApiParam({ name: 'id', type: String, required: true })
  @ApiBearerAuth()
  @Delete(':id')
  async deleteRestaurant(@Param('id') id: string): Promise<RestaurantModel> {
    return this.restaurantsService.deleteRestaurant(id)
  }
}

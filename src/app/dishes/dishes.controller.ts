import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger'
import { Dish as DishModel, Prisma } from '@prisma/client'
import { DishesService } from './dishes.service'

@ApiTags('dishes')
@Controller('dishes')
export class DishesController {
  constructor(private readonly dishesService: DishesService) {}

  @ApiOperation({ summary: 'Create dish' })
  @ApiParam({ name: 'dishData', type: Object, required: true })
  @ApiBearerAuth()
  @Post()
  async createDish(
    @Body() dishData: Prisma.DishCreateInput
  ): Promise<DishModel> {
    return this.dishesService.createDish(dishData)
  }

  @ApiOperation({ summary: 'Get all dishes' })
  @ApiBearerAuth()
  @Get()
  async getDishes(): Promise<DishModel[]> {
    return this.dishesService.getDishes()
  }

  @ApiOperation({ summary: 'Get dish by id' })
  @ApiParam({ name: 'id', type: String, required: true })
  @ApiBearerAuth()
  @Get(':id')
  async getDishById(@Param('id') id: string): Promise<DishModel | null> {
    return this.dishesService.getDishById(id)
  }

  @ApiOperation({ summary: 'Update dish' })
  @ApiParam({ name: 'id', type: String, required: true })
  @ApiBearerAuth()
  @Put(':id')
  async updateDish(
    @Param('id') id: string,
    @Body() dishData: Prisma.DishUpdateInput
  ): Promise<DishModel> {
    return this.dishesService.updateDish(id, dishData)
  }

  @ApiOperation({ summary: 'Delete dish' })
  @ApiParam({ name: 'id', type: String, required: true })
  @ApiBearerAuth()
  @Delete(':id')
  async deleteDish(@Param('id') id: string): Promise<DishModel> {
    return this.dishesService.deleteDish(id)
  }
}

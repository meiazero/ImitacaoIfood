import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { DishesService } from './dishes.service';
import { Dish as DishModel, Prisma } from '@prisma/client';

@Controller('dishes')
export class DishesController {
  constructor(private readonly dishesService: DishesService) {}

  @Post()
  async createDish(@Body() dishData: Prisma.DishCreateInput): Promise<DishModel> {
    return this.dishesService.createDish(dishData);
  }

  @Get()
  async getDishes(): Promise<DishModel[]> {
    return this.dishesService.getDishes();
  }

  @Get(':id')
  async getDishById(@Param('id') id: string): Promise<DishModel | null> {
    return this.dishesService.getDishById(id);
  }

  @Put(':id')
  async updateDish(@Param('id') id: string, @Body() dishData: Prisma.DishUpdateInput): Promise<DishModel> {
    return this.dishesService.updateDish(id, dishData);
  }

  @Delete(':id')
  async deleteDish(@Param('id') id: string): Promise<DishModel> {
    return this.dishesService.deleteDish(id);
  }
}
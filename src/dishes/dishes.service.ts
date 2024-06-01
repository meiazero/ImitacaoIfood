import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Dish, Prisma } from '@prisma/client';

@Injectable()
export class DishesService {
  constructor(private prisma: PrismaService) {}

  async createDish(data: Prisma.DishCreateInput): Promise<Dish> {
    return this.prisma.dish.create({ data });
  }

  async getDishes(): Promise<Dish[]> {
    return this.prisma.dish.findMany();
  }

  async getDishById(id: string): Promise<Dish | null> {
    return this.prisma.dish.findUnique({ where: { id } });
  }

  async updateDish(id: string, data: Prisma.DishUpdateInput): Promise<Dish> {
    return this.prisma.dish.update({ where: { id }, data });
  }

  async deleteDish(id: string): Promise<Dish> {
    return this.prisma.dish.delete({ where: { id } });
  }
}
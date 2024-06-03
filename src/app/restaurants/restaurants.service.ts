import { PrismaService } from '@/db/prisma.service'
import { Injectable } from '@nestjs/common'
import { Prisma, Restaurant } from '@prisma/client'

@Injectable()
export class RestaurantsService {
  constructor(private prisma: PrismaService) {}

  async createRestaurant(
    data: Prisma.RestaurantCreateInput
  ): Promise<Restaurant> {
    return this.prisma.restaurant.create({ data })
  }

  async getRestaurants(): Promise<Restaurant[]> {
    return this.prisma.restaurant.findMany()
  }

  async getRestaurantById(id: string): Promise<Restaurant | null> {
    return this.prisma.restaurant.findUnique({ where: { id } })
  }

  async updateRestaurant(
    id: string,
    data: Prisma.RestaurantUpdateInput
  ): Promise<Restaurant> {
    return this.prisma.restaurant.update({ where: { id }, data })
  }

  async deleteRestaurant(id: string): Promise<Restaurant> {
    return this.prisma.restaurant.delete({ where: { id } })
  }
}

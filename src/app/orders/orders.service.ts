import { PrismaService } from '@/db/prisma.service'
import { Injectable } from '@nestjs/common'
import { Order, Prisma } from '@prisma/client'

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async createOrder(data: Prisma.OrderCreateInput): Promise<Order> {
    return this.prisma.order.create({ data })
  }

  async getOrders(): Promise<Order[]> {
    return this.prisma.order.findMany()
  }

  async getOrderById(id: string): Promise<Order | null> {
    return this.prisma.order.findUnique({ where: { id } })
  }

  async updateOrder(id: string, data: Prisma.OrderUpdateInput): Promise<Order> {
    return this.prisma.order.update({ where: { id }, data })
  }

  async deleteOrder(id: string): Promise<Order> {
    return this.prisma.order.delete({ where: { id } })
  }
}

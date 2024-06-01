import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { OrderItem, Prisma } from '@prisma/client';

@Injectable()
export class OrderItemsService {
  constructor(private prisma: PrismaService) {}

  async createOrderItem(data: Prisma.OrderItemCreateInput): Promise<OrderItem> {
    return this.prisma.orderItem.create({ data });
  }

  async getOrderItems(): Promise<OrderItem[]> {
    return this.prisma.orderItem.findMany();
  }

  async getOrderItemById(id: string): Promise<OrderItem | null> {
    return this.prisma.orderItem.findUnique({ where: { id } });
  }

  async updateOrderItem(id: string, data: Prisma.OrderItemUpdateInput): Promise<OrderItem> {
    return this.prisma.orderItem.update({ where: { id }, data });
  }

  async deleteOrderItem(id: string): Promise<OrderItem> {
    return this.prisma.orderItem.delete({ where: { id } });
  }
}
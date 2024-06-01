import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { OrderItemsService } from './order-items.service';
import { OrderItem as OrderItemModel, Prisma } from '@prisma/client';

@Controller('order-items')
export class OrderItemsController {
  constructor(private readonly orderItemsService: OrderItemsService) {}

  @Post()
  async createOrderItem(@Body() orderItemData: Prisma.OrderItemCreateInput): Promise<OrderItemModel> {
    return this.orderItemsService.createOrderItem(orderItemData);
  }

  @Get()
  async getOrderItems(): Promise<OrderItemModel[]> {
    return this.orderItemsService.getOrderItems();
  }

  @Get(':id')
  async getOrderItemById(@Param('id') id: string): Promise<OrderItemModel | null> {
    return this.orderItemsService.getOrderItemById(id);
  }

  @Put(':id')
  async updateOrderItem(@Param('id') id: string, @Body() orderItemData: Prisma.OrderItemUpdateInput): Promise<OrderItemModel> {
    return this.orderItemsService.updateOrderItem(id, orderItemData);
  }

  @Delete(':id')
  async deleteOrderItem(@Param('id') id: string): Promise<OrderItemModel> {
    return this.orderItemsService.deleteOrderItem(id);
  }
}
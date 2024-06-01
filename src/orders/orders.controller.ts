import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order as OrderModel, Prisma } from '@prisma/client';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async createOrder(@Body() orderData: Prisma.OrderCreateInput): Promise<OrderModel> {
    return this.ordersService.createOrder(orderData);
  }

  @Get()
  async getOrders(): Promise<OrderModel[]> {
    return this.ordersService.getOrders();
  }

  @Get(':id')
  async getOrderById(@Param('id') id: string): Promise<OrderModel | null> {
    return this.ordersService.getOrderById(id);
  }

  @Put(':id')
  async updateOrder(@Param('id') id: string, @Body() orderData: Prisma.OrderUpdateInput): Promise<OrderModel> {
    return this.ordersService.updateOrder(id, orderData);
  }

  @Delete(':id')
  async deleteOrder(@Param('id') id: string): Promise<OrderModel> {
    return this.ordersService.deleteOrder(id);
  }
}
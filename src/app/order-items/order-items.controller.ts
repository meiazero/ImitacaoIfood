import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger'
import { OrderItem as OrderItemModel, Prisma } from '@prisma/client'
import { OrderItemsService } from './order-items.service'

@ApiTags('order-items')
@Controller('order-items')
export class OrderItemsController {
  constructor(private readonly orderItemsService: OrderItemsService) {}

  @ApiOperation({ summary: 'Create order item' })
  @ApiParam({ name: 'orderItemData', type: Object, required: true })
  @ApiBearerAuth()
  @Post()
  async createOrderItem(
    @Body() orderItemData: Prisma.OrderItemCreateInput
  ): Promise<OrderItemModel> {
    return this.orderItemsService.createOrderItem(orderItemData)
  }

  @ApiOperation({ summary: 'Get all order items' })
  @ApiBearerAuth()
  @Get()
  async getOrderItems(): Promise<OrderItemModel[]> {
    return this.orderItemsService.getOrderItems()
  }

  @ApiOperation({ summary: 'Get order item by id' })
  @ApiParam({ name: 'id', type: String, required: true })
  @ApiBearerAuth()
  @Get(':id')
  async getOrderItemById(
    @Param('id') id: string
  ): Promise<OrderItemModel | null> {
    return this.orderItemsService.getOrderItemById(id)
  }

  @ApiOperation({ summary: 'Update order item' })
  @ApiParam({ name: 'id', type: String, required: true })
  @ApiBearerAuth()
  @Put(':id')
  async updateOrderItem(
    @Param('id') id: string,
    @Body() orderItemData: Prisma.OrderItemUpdateInput
  ): Promise<OrderItemModel> {
    return this.orderItemsService.updateOrderItem(id, orderItemData)
  }

  @ApiOperation({ summary: 'Delete order item' })
  @ApiParam({ name: 'id', type: String, required: true })
  @ApiBearerAuth()
  @Delete(':id')
  async deleteOrderItem(@Param('id') id: string): Promise<OrderItemModel> {
    return this.orderItemsService.deleteOrderItem(id)
  }
}

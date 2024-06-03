import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger'
import { Order as OrderModel, Prisma } from '@prisma/client'
import { OrdersService } from './orders.service'

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @ApiOperation({ summary: 'Create order' })
  @ApiParam({ name: 'orderData', type: Object, required: true })
  @ApiBearerAuth()
  @Post()
  async createOrder(
    @Body() orderData: Prisma.OrderCreateInput
  ): Promise<OrderModel> {
    return this.ordersService.createOrder(orderData)
  }

  @ApiOperation({ summary: 'Get all orders' })
  @ApiBearerAuth()
  @Get()
  async getOrders(): Promise<OrderModel[]> {
    return this.ordersService.getOrders()
  }

  @ApiOperation({ summary: 'Get order by id' })
  @ApiParam({ name: 'id', type: String, required: true })
  @ApiBearerAuth()
  @Get(':id')
  async getOrderById(@Param('id') id: string): Promise<OrderModel | null> {
    return this.ordersService.getOrderById(id)
  }

  @ApiOperation({ summary: 'Update order' })
  @ApiParam({ name: 'id', type: String, required: true })
  @ApiBearerAuth()
  @Put(':id')
  async updateOrder(
    @Param('id') id: string,
    @Body() orderData: Prisma.OrderUpdateInput
  ): Promise<OrderModel> {
    return this.ordersService.updateOrder(id, orderData)
  }

  @ApiOperation({ summary: 'Delete order' })
  @ApiParam({ name: 'id', type: String, required: true })
  @ApiBearerAuth()
  @Delete(':id')
  async deleteOrder(@Param('id') id: string): Promise<OrderModel> {
    return this.ordersService.deleteOrder(id)
  }
}

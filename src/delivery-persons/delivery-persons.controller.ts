import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { DeliveryPersonsService } from './delivery-persons.service';
import { DeliveryPerson as DeliveryPersonModel, Prisma } from '@prisma/client';

@Controller('delivery-persons')
export class DeliveryPersonsController {
  constructor(private readonly deliveryPersonsService: DeliveryPersonsService) {}

  @Post()
  async createDeliveryPerson(@Body() deliveryPersonData: Prisma.DeliveryPersonCreateInput): Promise<DeliveryPersonModel> {
    return this.deliveryPersonsService.createDeliveryPerson(deliveryPersonData);
  }

  @Get()
  async getDeliveryPersons(): Promise<DeliveryPersonModel[]> {
    return this.deliveryPersonsService.getDeliveryPersons();
  }

  @Get(':id')
  async getDeliveryPersonById(@Param('id') id: string): Promise<DeliveryPersonModel | null> {
    return this.deliveryPersonsService.getDeliveryPersonById(id);
  }

  @Put(':id')
  async updateDeliveryPerson(@Param('id') id: string, @Body() deliveryPersonData: Prisma.DeliveryPersonUpdateInput): Promise<DeliveryPersonModel> {
    return this.deliveryPersonsService.updateDeliveryPerson(id, deliveryPersonData);
  }

  @Delete(':id')
  async deleteDeliveryPerson(@Param('id') id: string): Promise<DeliveryPersonModel> {
    return this.deliveryPersonsService.deleteDeliveryPerson(id);
  }
}
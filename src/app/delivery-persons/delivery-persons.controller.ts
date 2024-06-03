import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger'
import { DeliveryPerson as DeliveryPersonModel, Prisma } from '@prisma/client'
import { DeliveryPersonsService } from './delivery-persons.service'

@ApiTags('delivery-persons')
@Controller('delivery-persons')
export class DeliveryPersonsController {
  constructor(
    private readonly deliveryPersonsService: DeliveryPersonsService
  ) {}

  @ApiOperation({ summary: 'Create delivery person' })
  @ApiParam({ name: 'deliveryPersonData', type: Object, required: true })
  @ApiBearerAuth()
  @Post()
  async createDeliveryPerson(
    @Body() deliveryPersonData: Prisma.DeliveryPersonCreateInput
  ): Promise<DeliveryPersonModel> {
    return this.deliveryPersonsService.createDeliveryPerson(deliveryPersonData)
  }

  @ApiOperation({ summary: 'Get all delivery persons' })
  @ApiBearerAuth()
  @Get()
  async getDeliveryPersons(): Promise<DeliveryPersonModel[]> {
    return this.deliveryPersonsService.getDeliveryPersons()
  }

  @ApiOperation({ summary: 'Get delivery person by id' })
  @ApiParam({ name: 'id', type: String, required: true })
  @ApiBearerAuth()
  @Get(':id')
  async getDeliveryPersonById(
    @Param('id') id: string
  ): Promise<DeliveryPersonModel | null> {
    return this.deliveryPersonsService.getDeliveryPersonById(id)
  }

  @ApiOperation({ summary: 'Update delivery person' })
  @ApiParam({ name: 'id', type: String, required: true })
  @ApiParam({ name: 'deliveryPersonData', type: Object, required: true })
  @ApiBearerAuth()
  @Put(':id')
  async updateDeliveryPerson(
    @Param('id') id: string,
    @Body() deliveryPersonData: Prisma.DeliveryPersonUpdateInput
  ): Promise<DeliveryPersonModel> {
    return this.deliveryPersonsService.updateDeliveryPerson(
      id,
      deliveryPersonData
    )
  }

  @ApiOperation({ summary: 'Delete delivery person' })
  @ApiParam({ name: 'id', type: String, required: true })
  @ApiBearerAuth()
  @Delete(':id')
  async deleteDeliveryPerson(
    @Param('id') id: string
  ): Promise<DeliveryPersonModel> {
    return this.deliveryPersonsService.deleteDeliveryPerson(id)
  }
}

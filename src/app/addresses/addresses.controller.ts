import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger'
import { type Address as AddressModel, Prisma } from '@prisma/client'
import { AddressesService } from './addresses.service'

@ApiTags('addresses')
@Controller('addresses')
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) {}

  @ApiOperation({ summary: 'Create address' })
  @ApiParam({ name: 'addressData', type: Object, required: true })
  @ApiBearerAuth()
  @Post()
  async createAddress(
    @Body() addressData: Prisma.AddressCreateInput
  ): Promise<AddressModel> {
    return this.addressesService.createAddress(addressData)
  }

  @ApiOperation({ summary: 'Get all addresses' })
  @ApiBearerAuth()
  @Get()
  async getAddresses(): Promise<AddressModel[]> {
    return this.addressesService.getAddresses()
  }

  @ApiOperation({ summary: 'Get address by id' })
  @ApiParam({ name: 'id', type: String, required: true })
  @ApiBearerAuth()
  @Get(':id')
  async getAddressById(@Param('id') id: string): Promise<AddressModel | null> {
    return this.addressesService.getAddressById(id)
  }

  @ApiOperation({ summary: 'Update address' })
  @ApiParam({ name: 'id', type: String, required: true })
  @ApiBearerAuth()
  @Put(':id')
  async updateAddress(
    @Param('id') id: string,
    @Body() addressData: Prisma.AddressUpdateInput
  ): Promise<AddressModel> {
    return this.addressesService.updateAddress(id, addressData)
  }

  @ApiOperation({ summary: 'Delete address' })
  @ApiParam({ name: 'id', type: String, required: true })
  @ApiBearerAuth()
  @Delete(':id')
  async deleteAddress(@Param('id') id: string): Promise<AddressModel> {
    return this.addressesService.deleteAddress(id)
  }
}

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { Address as AddressModel, Prisma } from '@prisma/client';

@Controller('addresses')
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) {}

  @Post()
  async createAddress(@Body() addressData: Prisma.AddressCreateInput): Promise<AddressModel> {
    return this.addressesService.createAddress(addressData);
  }

  @Get()
  async getAddresses(): Promise<AddressModel[]> {
    return this.addressesService.getAddresses();
  }

  @Get(':id')
  async getAddressById(@Param('id') id: string): Promise<AddressModel | null> {
    return this.addressesService.getAddressById(id);
  }

  @Put(':id')
  async updateAddress(@Param('id') id: string, @Body() addressData: Prisma.AddressUpdateInput): Promise<AddressModel> {
    return this.addressesService.updateAddress(id, addressData);
  }

  @Delete(':id')
  async deleteAddress(@Param('id') id: string): Promise<AddressModel> {
    return this.addressesService.deleteAddress(id);
  }
}
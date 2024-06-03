import { PrismaService } from '@/db/prisma.service'
import { Injectable } from '@nestjs/common'
import { Address, Prisma } from '@prisma/client'

@Injectable()
export class AddressesService {
  constructor(private prisma: PrismaService) {}

  async createAddress(data: Prisma.AddressCreateInput): Promise<Address> {
    return this.prisma.address.create({ data })
  }

  async getAddresses(): Promise<Address[]> {
    return this.prisma.address.findMany()
  }

  async getAddressById(id: string): Promise<Address | null> {
    return this.prisma.address.findUnique({ where: { id } })
  }

  async updateAddress(
    id: string,
    data: Prisma.AddressUpdateInput
  ): Promise<Address> {
    return this.prisma.address.update({ where: { id }, data })
  }

  async deleteAddress(id: string): Promise<Address> {
    return this.prisma.address.delete({ where: { id } })
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { DeliveryPerson, Prisma } from '@prisma/client';

@Injectable()
export class DeliveryPersonsService {
  constructor(private prisma: PrismaService) {}

  async createDeliveryPerson(data: Prisma.DeliveryPersonCreateInput): Promise<DeliveryPerson> {
    return this.prisma.deliveryPerson.create({ data });
  }

  async getDeliveryPersons(): Promise<DeliveryPerson[]> {
    return this.prisma.deliveryPerson.findMany();
  }

  async getDeliveryPersonById(id: string): Promise<DeliveryPerson | null> {
    return this.prisma.deliveryPerson.findUnique({ where: { id } });
  }

  async updateDeliveryPerson(id: string, data: Prisma.DeliveryPersonUpdateInput): Promise<DeliveryPerson> {
    return this.prisma.deliveryPerson.update({ where: { id }, data });
  }

  async deleteDeliveryPerson(id: string): Promise<DeliveryPerson> {
    return this.prisma.deliveryPerson.delete({ where: { id } });
  }
}
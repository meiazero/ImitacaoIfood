import { PrismaService } from '@/db/prisma.service'
import { Injectable } from '@nestjs/common'
import { Payment, Prisma } from '@prisma/client'

@Injectable()
export class PaymentsService {
  constructor(private prisma: PrismaService) {}

  async createPayment(data: Prisma.PaymentCreateInput): Promise<Payment> {
    return this.prisma.payment.create({ data })
  }

  async getPayments(): Promise<Payment[]> {
    return this.prisma.payment.findMany()
  }

  async getPaymentById(id: string): Promise<Payment | null> {
    return this.prisma.payment.findUnique({ where: { id } })
  }

  async updatePayment(
    id: string,
    data: Prisma.PaymentUpdateInput
  ): Promise<Payment> {
    return this.prisma.payment.update({ where: { id }, data })
  }

  async deletePayment(id: string): Promise<Payment> {
    return this.prisma.payment.delete({ where: { id } })
  }
}

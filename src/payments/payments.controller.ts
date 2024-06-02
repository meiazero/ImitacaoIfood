import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { Payment as PaymentModel, Prisma } from '@prisma/client';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post()
  async createPayment(@Body() paymentData: Prisma.PaymentCreateInput): Promise<PaymentModel> {
    return this.paymentsService.createPayment(paymentData);
  }

  @Get()
  async getPayments(): Promise<PaymentModel[]> {
    return this.paymentsService.getPayments();
  }

  @Get(':id')
  async getPaymentById(@Param('id') id: string): Promise<PaymentModel | null> {
    return this.paymentsService.getPaymentById(id);
  }

  @Put(':id')
  async updatePayment(@Param('id') id: string, @Body() paymentData: Prisma.PaymentUpdateInput): Promise<PaymentModel> {
    return this.paymentsService.updatePayment(id, paymentData);
  }

  @Delete(':id')
  async deletePayment(@Param('id') id: string): Promise<PaymentModel> {
    return this.paymentsService.deletePayment(id);
  }
}
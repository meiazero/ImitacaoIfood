import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger'
import { Payment as PaymentModel, Prisma } from '@prisma/client'
import { PaymentsService } from './payments.service'

@ApiTags('payments')
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @ApiOperation({ summary: 'Create payment' })
  @ApiParam({ name: 'paymentData', type: Object, required: true })
  @ApiBearerAuth()
  @Post()
  async createPayment(
    @Body() paymentData: Prisma.PaymentCreateInput
  ): Promise<PaymentModel> {
    return this.paymentsService.createPayment(paymentData)
  }

  @ApiOperation({ summary: 'Get all payments' })
  @ApiBearerAuth()
  @Get()
  async getPayments(): Promise<PaymentModel[]> {
    return this.paymentsService.getPayments()
  }

  @ApiOperation({ summary: 'Get payment by id' })
  @ApiParam({ name: 'id', type: String, required: true })
  @ApiBearerAuth()
  @Get(':id')
  async getPaymentById(@Param('id') id: string): Promise<PaymentModel | null> {
    return this.paymentsService.getPaymentById(id)
  }

  @ApiOperation({ summary: 'Update payment' })
  @ApiParam({ name: 'id', type: String, required: true })
  @ApiBearerAuth()
  @Put(':id')
  async updatePayment(
    @Param('id') id: string,
    @Body() paymentData: Prisma.PaymentUpdateInput
  ): Promise<PaymentModel> {
    return this.paymentsService.updatePayment(id, paymentData)
  }

  @ApiOperation({ summary: 'Delete payment' })
  @ApiParam({ name: 'id', type: String, required: true })
  @ApiBearerAuth()
  @Delete(':id')
  async deletePayment(@Param('id') id: string): Promise<PaymentModel> {
    return this.paymentsService.deletePayment(id)
  }
}

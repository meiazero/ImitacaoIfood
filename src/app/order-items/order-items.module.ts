import { PrismaModule } from '@/db/prisma.module'
import { Module } from '@nestjs/common'
import { OrderItemsController } from './order-items.controller'
import { OrderItemsService } from './order-items.service'

@Module({
  imports: [PrismaModule],
  providers: [OrderItemsService],
  controllers: [OrderItemsController]
})
export class OrderItemsModule {}

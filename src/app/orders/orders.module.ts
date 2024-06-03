import { PrismaModule } from '@/db/prisma.module'
import { Module } from '@nestjs/common'
import { OrdersController } from './orders.controller'
import { OrdersService } from './orders.service'

@Module({
  imports: [PrismaModule],
  providers: [OrdersService],
  controllers: [OrdersController]
})
export class OrdersModule {}

import { PrismaModule } from '@/db/prisma.module'
import { Module } from '@nestjs/common'
import { DeliveryPersonsController } from './delivery-persons.controller'
import { DeliveryPersonsService } from './delivery-persons.service'

@Module({
  imports: [PrismaModule],
  providers: [DeliveryPersonsService],
  controllers: [DeliveryPersonsController]
})
export class DeliveryPersonsModule {}

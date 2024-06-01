import { Module } from '@nestjs/common';
import { DeliveryPersonsService } from './delivery-persons.service';
import { DeliveryPersonsController } from './delivery-persons.controller';

@Module({
  providers: [DeliveryPersonsService],
  controllers: [DeliveryPersonsController]
})
export class DeliveryPersonsModule {}

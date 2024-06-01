import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from '../prisma/prisma.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { DishesModule } from './dishes/dishes.module';
import { OrdersModule } from './orders/orders.module';
import { OrderItemsModule } from './order-items/order-items.module';
import { DeliveryPersonsModule } from './delivery-persons/delivery-persons.module';
import { AddressesModule } from './addresses/addresses.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [UsersModule, PrismaModule, RestaurantsModule, DishesModule, OrdersModule, OrderItemsModule, DeliveryPersonsModule, AddressesModule, PaymentsModule],
})
export class AppModule {}
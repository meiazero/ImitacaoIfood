import { PrismaModule } from '@/db/prisma.module'
import { Module } from '@nestjs/common'
import { AddressesModule } from './app/addresses/addresses.module'
import { AuthModule } from './app/auth/auth.module'
import { DeliveryPersonsModule } from './app/delivery-persons/delivery-persons.module'
import { DishesModule } from './app/dishes/dishes.module'
import { OrderItemsModule } from './app/order-items/order-items.module'
import { OrdersModule } from './app/orders/orders.module'
import { PaymentsModule } from './app/payments/payments.module'
import { RestaurantsModule } from './app/restaurants/restaurants.module'
import { UsersModule } from './app/users/users.module'

@Module({
  imports: [
    UsersModule,
    PrismaModule,
    RestaurantsModule,
    DishesModule,
    OrdersModule,
    OrderItemsModule,
    DeliveryPersonsModule,
    AddressesModule,
    PaymentsModule,
    AuthModule
  ]
})
export class AppModule {}

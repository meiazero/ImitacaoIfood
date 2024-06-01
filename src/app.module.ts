import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from '../prisma/prisma.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { DishesModule } from './dishes/dishes.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [UsersModule, PrismaModule, RestaurantsModule, DishesModule, OrdersModule],
})
export class AppModule {}
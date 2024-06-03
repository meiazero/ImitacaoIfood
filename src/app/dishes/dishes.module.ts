import { PrismaModule } from '@/db/prisma.module'
import { Module } from '@nestjs/common'
import { DishesController } from './dishes.controller'
import { DishesService } from './dishes.service'

@Module({
  imports: [PrismaModule],
  providers: [DishesService],
  controllers: [DishesController]
})
export class DishesModule {}

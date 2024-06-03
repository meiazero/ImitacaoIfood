import { PrismaModule } from '@/db/prisma.module'
import { Module } from '@nestjs/common'
import { AddressesController } from './addresses.controller'
import { AddressesService } from './addresses.service'

@Module({
  imports: [PrismaModule],
  providers: [AddressesService],
  controllers: [AddressesController]
})
export class AddressesModule {}

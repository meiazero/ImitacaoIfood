import { Public } from '@/logging.decorator'
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger'
import { Prisma, User as UserModel } from '@prisma/client'
import { UsersService } from './users.service'

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Create user' })
  @ApiParam({ name: 'userData', type: Object, required: true })
  @Public()
  @Post()
  async createUser(
    @Body() userData: Prisma.UserCreateInput
  ): Promise<UserModel> {
    return this.usersService.createUser(userData)
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiBearerAuth()
  @Get()
  async getUsers(): Promise<UserModel[]> {
    return this.usersService.getUsers()
  }

  @ApiOperation({ summary: 'Get user by id' })
  @ApiParam({ name: 'id', type: String, required: true })
  @ApiBearerAuth()
  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<UserModel | null> {
    return this.usersService.getUserById(id)
  }

  @ApiOperation({ summary: 'Update user' })
  @ApiParam({ name: 'id', type: String, required: true })
  @ApiBearerAuth()
  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() userData: Prisma.UserUpdateInput
  ): Promise<UserModel> {
    return this.usersService.updateUser(id, userData)
  }

  @ApiOperation({ summary: 'Delete user' })
  @ApiParam({ name: 'id', type: String, required: true })
  @ApiBearerAuth()
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<UserModel> {
    return this.usersService.deleteUser(id)
  }
}

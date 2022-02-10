import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { NewUserDTO, UserDTO } from './users.dto'

import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers()
  }

  @Post()
  createUser(@Body() data: NewUserDTO) {
    return this.usersService.createUser(data)
  }

  @Put()
  updateUser(@Body() data: UserDTO) {
    return this.usersService.updateUser(data)
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id)
  }
}

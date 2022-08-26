import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from 'src/typeorm/entities/User';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/servce/users/users.service';

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) { }

  @Get()
  async getUsers(): Promise<User[]> {
    return await this.usersService.findUsers();
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto);
  }
}

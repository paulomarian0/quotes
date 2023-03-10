import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { QueryParamsUserDto } from './dto/query-params-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() data: CreateUserDto) {
    return this.usersService.create(data);
  }

  @Get()
  findAll(@Query() params: QueryParamsUserDto) {
    return this.usersService.findAll(params);
  }

  @Patch()
  update(@Query() params: QueryParamsUserDto , @Body() data: UpdateUserDto) {
    return this.usersService.update(params, data);
  }

  @Delete()
  remove(@Query() params: QueryParamsUserDto ) {
    return this.usersService.remove(params);
  }
}

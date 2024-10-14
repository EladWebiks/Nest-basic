import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser } from 'src/types/user';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}
    @Get()
    getAllUsers(): IUser[]{
        return this.usersService.getAllUsers();
    }

    @Post()
    createUser(@Body() user: IUser): string{
        return this.usersService.addUser(user);
    }
}

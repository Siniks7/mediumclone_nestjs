import { ExpressRequest } from '@app/types/expressRequest.interface';
import { UserService } from '@app/user/user.service';
import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { loginUserDto } from './dto/loginUser.dto';
import { UserResponseInterface } from './types/userResponse.interface';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('users')
  @UsePipes(new ValidationPipe())
  async createUser(
    @Body('user') createUserDto: CreateUserDto
  ): Promise<UserResponseInterface> {
    const user = await this.userService.createUser(createUserDto);
    return this.userService.buildUserResponse(user);
  }

  @Post('users/login')
  @UsePipes(new ValidationPipe())
  async loginUser(
    @Body('user') loginDto: loginUserDto
  ): Promise<UserResponseInterface> {
    const user = await this.userService.loginUser(loginDto);
    return this.userService.buildUserResponse(user);
  }

  @Get('user')
  async currentUser(
    @Req() request: ExpressRequest
  ): Promise<UserResponseInterface> {
    return this.userService.buildUserResponse(request.user);
  }
}

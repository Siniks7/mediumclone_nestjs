import { UserService } from '@app/user/user.service';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UserEntity } from './user.entity';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('users')
  async createUser(
    @Body('user') createUserDto: CreateUserDto
  ): Promise<UserEntity> {
    const user = await this.userService.createUser(createUserDto);
    // return this.userService.buildUserResponse(user);
    return user;
  }
}
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Buffer } from 'buffer';
import { generateKeyPairSync, sign } from 'crypto';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { UserResponseInterface } from './types/userResponse.interface';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}
  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const newUser = new UserEntity();
    Object.assign(newUser, createUserDto);
    return await this.userRepository.save(newUser);
  }

  generateJwt(user: UserEntity): string {
    const { privateKey } = generateKeyPairSync('rsa', {
      modulusLength: 2048
    });
    const thisUser = {
      id: user.id,
      username: user.username,
      email: user.email
    };
    const data = Buffer.from(JSON.stringify(thisUser));
    const sign1 = sign('SHA256', data, privateKey);
    const signature = sign1.toString('base64');
    return signature;
  }

  buildUserResponse(user: UserEntity): UserResponseInterface {
    return {
      user: {
        ...user,
        token: this.generateJwt(user)
      }
    };
  }
}

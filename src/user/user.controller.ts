/* eslint-disable prettier/prettier */
/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Post } from '@nestjs/common';

@Controller()
export class UserController {
    @Post('users')
    async createUser(): Promise<any> {
        return "create user";
    }
}

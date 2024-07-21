import { ExpressRequest } from '@app/types/expressRequest.interface';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator((data: any, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest<ExpressRequest>();

  if (!request.user) {
    null;
  }

  if (data) {
    return request.user[data];
  }

  return request.user;
});

// From NestJs documentation

import { createParamDecorator, ExecutionContext } from '@nestjs/common';
  
  export const JwtDecorator = createParamDecorator(
    ( data: string | undefined, ctx: ExecutionContext ) => {
      const request: Express.Request = ctx
        .switchToHttp()
        .getRequest();
        
      // Add condition to get the desired data from the user object
      if (data) {
        return request.user[data];
      }
      return request.user;
    },
  );
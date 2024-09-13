import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';

@Catch()
export class NotFoundFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {

    host
    .switchToHttp()
    .getResponse()
    .status(exception.getStatus())
    .json({
      statusCode: HttpStatus.NOT_FOUND,
      timestamp: new Date().toISOString(),
      path: host.switchToHttp().getRequest().url,
      message: 'The resource you are looking for was not found.',
    });
    
  }
}

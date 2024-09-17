import { Controller, Get } from '@nestjs/common';

@Controller()
export class ApiGatewayController {

    @Get()
    apigatewayHello(){
        return 'Welcome to agrisistance api gateway';
    }

}

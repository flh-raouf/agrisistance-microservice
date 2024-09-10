import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient as PrismaUserClient } from '../../../generated/user-client';

@Injectable()
export class PrismaUserService extends PrismaUserClient {
    constructor(config: ConfigService) {
        super({
            datasources: {
                db: {
                    url: config.get('DATABASE_USER_URL'),
                },
            },
        });
    }
}

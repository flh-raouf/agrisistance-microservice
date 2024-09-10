import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient as PrismaLandClient } from '../../../generated/land-client';

@Injectable()
export class PrismaLandService extends PrismaLandClient {
    constructor(config: ConfigService) {
        super({
            datasources: {
                db: {
                    url: config.get('DATABASE_LAND_URL'),
                },
            },
        });
    }
}

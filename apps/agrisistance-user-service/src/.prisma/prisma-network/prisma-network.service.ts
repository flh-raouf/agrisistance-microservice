import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient as PrismaNetworkClient } from '../../../generated/network-client';

@Injectable()
export class PrismaNetworkService extends PrismaNetworkClient {
    constructor(config: ConfigService) {
        super({
            datasources: {
                db: {
                    url: config.get('DATABASE_NETWORK_URL'),
                },
            },
        });
    }
}

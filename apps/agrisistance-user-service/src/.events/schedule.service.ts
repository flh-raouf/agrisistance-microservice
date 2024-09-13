import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { EmailService } from '../.email/email.service';
import { PrismaUserService } from '../.prisma/prisma-user/prisma-user.service';
import { PrismaLandService } from '../.prisma/prisma-land/prisma-land.service';
import { PrismaNetworkService } from '../.prisma/prisma-network/prisma-network.service';

@Injectable()
export class ScheduleTaskService {
    constructor(
        private prismaLand: PrismaLandService,
        private prismaUser: PrismaUserService,
        private prismaNetwork: PrismaNetworkService,
        private readonly emailService: EmailService,
    ) {}

    @Cron('0 0 0 * * *')
    async handleCron() {
    
        const threeDaysAgo = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000);
      
        try {
          // Find users whose deletion was requested more than 3 days ago
          const usersToDelete = await this.prismaUser.user.findMany({
            where: {
              deletion_requested_at: {
                lte: threeDaysAgo,
              },
            },
          });
      
          for (const user of usersToDelete) {
            // Check if user has logged in during the 3-day period
            if (user.last_login && user.last_login > threeDaysAgo) {
              console.log(`Deletion aborted for user ${user.user_id} due to recent login`);
              continue;
            }
      
            const userId = user.user_id;
      
            // Start deletion of all related data for the user across all databases
            await Promise.all([
              // Delete from Network Database
              this.prismaNetwork.user_Seen_Post.deleteMany({ where: { user_id: userId } }),
              this.prismaNetwork.post.deleteMany({ where: { user_id: userId } }),
              this.prismaNetwork.user.delete({ where: { user_id: userId } }),
      
              // Delete from Land Database
              this.prismaLand.weather.deleteMany({ where: { land: { user_id: userId } } }),
              this.prismaLand.businessPlan.deleteMany({ where: { land: { user_id: userId } } }),
              this.prismaLand.finance.deleteMany({ where: { land: { user_id: userId } } }),
              this.prismaLand.cropMaintenance.deleteMany({ where: { land: { user_id: userId } } }),
              this.prismaLand.crop.deleteMany({ where: { land: { user_id: userId } } }),
              this.prismaLand.landStatistic.deleteMany({ where: { land: { user_id: userId } } }),
              this.prismaLand.land.deleteMany({ where: { user_id: userId } }),
              this.prismaLand.user.delete({ where: { user_id: userId } }),
      
              // Delete from User Database
              this.prismaUser.user.delete({ where: { user_id: userId } }),
            ]);
      
            console.log(`Deleted user data for user_id: ${userId}`);
            await this.emailService.sendEmail( user.email, '', 'successdeletion' )
          }

          
        } catch (error) {
          console.error("Error deleting user data:", error);
        } finally {
          await this.prismaUser.$disconnect();
          await this.prismaNetwork.$disconnect();
          await this.prismaLand.$disconnect();
        }
    }
}

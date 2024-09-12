import { Global, Module } from '@nestjs/common';
import { ScheduleTaskService } from './schedule.service';

@Global()
@Module({
  providers: [ScheduleTaskService],
  exports: [ScheduleTaskService],
})
export class ScheduleTaskModule {}
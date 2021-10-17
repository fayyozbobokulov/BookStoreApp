import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { ManagerModule } from './manager/manager.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    AdminModule,
    ManagerModule,
  ],
})
export class AppModule {}

import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import ormconfig from '@app/ormconfig';
import { TagModule } from '@app/tag/tag.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot(ormconfig), TagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

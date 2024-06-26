import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { TagModule } from '@app/tag/tag.module';
import { Module } from '@nestjs/common';

@Module({
	imports: [TagModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}

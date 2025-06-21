import { AuthenticationController } from './modules/auth/auth.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, AuthenticationController],
  providers: [AppService],
})
export class AppModule {}
